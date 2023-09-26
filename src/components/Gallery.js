import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GalleryDisplayAmountInit, GalleryDisplayMarginalScrollIncrease, SMALL_IMAGE_BASE_URL, SMALL_IMAGE_URL } from '../config';
import { Api } from '../helpers/api';
import GalleryFilter from './GalleryFilter';
import GalleryHorseCard from './GalleryHorseCard';
import MetadataLite from '../assets/metadata_lite.json';
import LayersLite from '../assets/layers_lite.json';
import HorseCardModal from './HorseCardModal';
import HorseShoe from '../assets/horseShoePNG.GIF';

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

const GridContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  justify-content: center;

  ::-webkit-scrollbar {display:none;}
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
`;

const ImageBox = styled.div`
  padding: 12px;
  height: calc(100vh - 220px);
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

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;





const Gallery = () => {
  const [loading, setLoading] = useState(true)
  const [endDisplayIdx, setEndDisplayIdx] = useState(GalleryDisplayAmountInit)
  const [metadata, setMetadata] = useState([])
  const [data, setData] = useState([])
  const [modalDisplayId, setModalDisplayId] = useState(-1)
  const [layers, setLayers] = useState({})
  const listInnerRef = useRef();
  const dataRef = useRef();

   
  useEffect(() => {
    fetchCollection()
  }, [])

  useEffect(() => {
      dataRef.current = data;
  }, [data]);


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

  const randomizeDisplayData = () => {
    cleanAllFilters();
  
    // Shuffle metadata array
    const shuffledMetadata = [...metadata].sort(() => Math.random() - 0.5);
  
    // Take the first 100 items
    const randomData = shuffledMetadata.slice(0, 100);
    
    setData(randomData);
  };

  const updateLayers = ({layer_name, trait_name, clicked, clicked_from_mhs_id}) => {
    console.log('update_layers f: ', layer_name, trait_name, clicked, clicked_from_mhs_id)
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

      if(clicked_from_mhs_id !== null) {
        let new_modal_display_id = 0;

        while (filtered[new_modal_display_id].edition != clicked_from_mhs_id){
          new_modal_display_id += 1
        }
        setModalDisplayId(new_modal_display_id)
      };
  
    } else {
      setData(metadata)      
      if(clicked_from_mhs_id !== null) {
        let new_modal_display_id = 0;

        while (metadata[new_modal_display_id].edition != clicked_from_mhs_id){
          new_modal_display_id += 1
        }
        setModalDisplayId(new_modal_display_id)
      };
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
    const currentData = dataRef.current;

    setModalDisplayId(prevModalDisplayId => {
        // Now use currentData instead of data
        
        switch (how) {
            case 'close':
                return -1;
            
            case 'up':
                if (currentData.length > 1){
                    let nextId = prevModalDisplayId + 1;
                    if (nextId >= currentData.length) {
                        nextId -= currentData.length;
                    }
                    return nextId;
                }
                else {
                    console.warn(`You cannot go ${how} when there is only 1 nft on display!`);
                    return prevModalDisplayId;  // return previous state
                }
            
            case 'down':
                if (currentData.length > 1){
                    let prevId = prevModalDisplayId - 1;
                    if (prevId < 0) {
                        prevId += currentData.length;
                    }
                    return prevId;
                }
                else {
                    console.warn(`You cannot go ${how} when there is only 1 nft on display!`);
                    return prevModalDisplayId;  // return previous state
                }

            default:
                console.warn(`Unknown 'how' value received: ${how}`);
                return prevModalDisplayId;  // return previous state
        }
    });
};


  console.log('Gallery', modalDisplayId, data)
  return (
    <Section id="gallery">
        {loading !== true ?
          <GalleryFilter
            key='gallery'
            layers={layers}
            updateLayers={updateLayers}
            cleanAllFilters={cleanAllFilters}
            randomizeDisplayData={randomizeDisplayData}
          />
          :
          <GalleryFilter
            key='gallery_loading'
            layers={LayersLite}
            updateLayers={updateLayers}
            cleanAllFilters={cleanAllFilters}
            randomizeDisplayData={randomizeDisplayData}
          />
          }
        <GridContainer
          id="GalleryNFTGrid"
          onScroll={onScroll}
          ref={listInnerRef}
        >
          <ImageBox 
            id="GalleryNFTGrid"
          >
            {data.slice(0,endDisplayIdx).map((item, idx) => {
                  return (
                    <GalleryHorseCard 
                      key={item.edition}
                      data={item}
                      token_uri={SMALL_IMAGE_URL(item.edition)}
                      dataIdx={idx}
                      updateModalDisplay={setModalDisplayId}
                      horseShoe={HorseShoe}
                    />
                  )})}
          </ImageBox>
        </GridContainer>
        
        {modalDisplayId !== -1 &&
          <HorseCardModal
            id={`HorseCardModal ${data[modalDisplayId].edition}`}
            key={data[modalDisplayId].edition}
            data={data[modalDisplayId]}
            token_uri={SMALL_IMAGE_URL(data[modalDisplayId].edition)}
            updateModalDisplay={updateModalDisplay}
            updateLayers={updateLayers}
            layers={layers}
          />
        }
    </Section>
  );
};

export default Gallery;
