import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GalleryDisplayAmountInit, GalleryDisplayMarginalScrollIncrease, SMALL_IMAGE_BASE_URL, SMALL_IMAGE_URL } from '../config';
import { Api } from '../helpers/api';
import GalleryFilter from './GalleryFilter';
import GalleryHorseCard from './GalleryHorseCard';
import MetadataLite from '../assets/metadata_lite.json';
import LayersLite from '../assets/layers_lite.json';
import HorseCardModal from './HorseCardModal';

const Section = styled.section`
  position: relative;
  background: none;
  padding: ${(props) => props.theme.navHeight} 120px 12px 120px; 

  display: flex;
  justify-content: center;

  @media (max-width: 68em) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageBox = styled.div`
  padding: 12px;
  height: calc(100vh - 220px);
  overflow-x: hidden;
  overflow-y: visible;
  display: grid;
  
  column-gap: 24px;
  row-gap: 20px;
  
  grid-template-columns: repeat(5, 1fr);

  ::-webkit-scrollbar {display:none;}
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
      
  @media (max-width: 116em) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 100em) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 84em) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 428px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;





const Gallery = () => {
  const [loading, setLoading] = useState(true)
  const [endDisplayIdx, setEndDisplayIdx] = useState(GalleryDisplayAmountInit)
  const [metadata, setMetadata] = useState([])
  const [data, setData] = useState([])
  const [modalDisplayId, setModalDisplayId] = useState(0)
  const [layers, setLayers] = useState({})
  const listInnerRef = useRef();
   
  useEffect(() => {
    fetchCollection()
  }, [])

  const fetchCollection = async() => {
    setLoading(true)
    setEndDisplayIdx(GalleryDisplayAmountInit);


    let layers_data = JSON.parse(JSON.stringify(LayersLite));
    setLayers(layers_data)

    let metadata_data = MetadataLite;
    setMetadata(metadata_data)
    setData(metadata_data)

    setLoading(false)
    
  }

  const applyFilter = (attributes, filter_data) => {
    for (let layer_name in attributes) {
      if(filter_data.hasOwnProperty(layer_name)){
        if(!(filter_data[layer_name].includes(attributes[`${layer_name}`][0]))){
            return false;
        }
    }
    }

    return true;
  };

  const updateLayers = ({layer_name, trait_name, clicked}) => {
    console.log('update_layers f: ', layer_name, trait_name, clicked)
    let current_layers_data = layers;
    current_layers_data[layer_name][trait_name]['clicked'] = clicked
    setLayers(current_layers_data)
    setEndDisplayIdx(GalleryDisplayAmountInit);

    let filter_data = {};

    for(let layer_name in layers){
        let layer_selections = [];

        for (let trait_name in layers[layer_name]){
          if(layers[layer_name][trait_name].clicked){
            layer_selections.push(trait_name);
          }
        }

        if(layer_selections.length>0){
          filter_data[layer_name] = layer_selections;
        }
    };
    console.log("filter_data", filter_data)
    
    if(Object.keys(filter_data).length > 0) {
      let filtered = metadata.filter(item => (
        applyFilter(item.attributes, filter_data)
      ))
      console.log('filtered', filtered)

      setData(filtered)      
    } else {
      setData(metadata)
    }
  }

  const cleanAllFilters = async() => {
    console.log('cleanAllFilters')
    fetchCollection()
  }

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log(`scroll display ${GalleryDisplayMarginalScrollIncrease} more: total ${endDisplayIdx}`)
        setEndDisplayIdx(endDisplayIdx+GalleryDisplayMarginalScrollIncrease);
      }
    }
  };

  const updateModalDisplay = (how) => {
    console.log(how, modalDisplayId);
    switch (how) {
        case 'close':
            setModalDisplayId(0);
            break;
        
        case 'up':
            let nextId = modalDisplayId + 1;
            if (nextId > 10000) {
                nextId -= 10000;
            }
            setModalDisplayId(nextId);
            break;
        
        case 'down':
            let prevId = modalDisplayId - 1;
            if (prevId < 1) {
                prevId += 10000;
            }
            setModalDisplayId(prevId);
            break;

        default:
            console.warn(`Unknown 'how' value received: ${how}`);
            break;
    }
};

 
  return (
    <Section id="gallery">
        {loading !== true ?
          <GalleryFilter
            key='gallery'
            layers={layers}
            updateLayers={updateLayers}
            cleanAllFilters={cleanAllFilters}
          />
          :
          <GalleryFilter
            key='gallery_loading'
            layers={LayersLite}
            updateLayers={updateLayers}
            cleanAllFilters={cleanAllFilters}
          />
          }
        <ImageBox 
          onScroll={onScroll}
          ref={listInnerRef}
        >
          {data.slice(0,endDisplayIdx).map((item) => {
                return (
                  <GalleryHorseCard 
                    key={item.edition}
                    data={item}
                    token_uri={SMALL_IMAGE_URL(item.edition)}
                    updateModalDisplay={setModalDisplayId}
                  />
                )})}
        </ImageBox>
        {modalDisplayId > 0 &&
          <HorseCardModal
            data={data[modalDisplayId-1]}
            token_uri={SMALL_IMAGE_URL(modalDisplayId)}
            updateModalDisplay={updateModalDisplay}
          />
        }
    </Section>
  );
};

export default Gallery;
