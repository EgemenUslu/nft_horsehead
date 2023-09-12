import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GalleryDisplayAmountInit, GalleryDisplayMarginalScrollIncrease, SMALL_IMAGE_BASE_URL, SMALL_IMAGE_URL } from '../config';
import { Api } from '../helpers/api';
import GalleryFilter from './GalleryFilter';
import GalleryHorseCard from './GalleryHorseCard';
import MetadataLite from '../assets/metadata_lite.json';
import LayersLite from '../assets/layers_lite.json';

const Section = styled.section`
  position: relative;
  background: none;
  width: 60vw;
  padding: ${(props) => props.theme.navHeight} 10vw 100px 10vw; 

  display: flex;
  justify-content: space-between;

  @media (max-width: 64em) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageBox = styled.div`
  min-width: 952px;
  padding: 12px;
  height: calc(100vh - 220px);
  overflow-x: hidden;
  overflow-y: visible;
  display: grid; 
  
  grid-template-columns: 220px 220px 220px 220px;
  grid-template-rows: 220px 220px 220px 220px;
  column-gap: 24px;
  row-gap: 60px;
  ::-webkit-scrollbar {display:none;}
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */

  @media (max-width: 80em) {
    min-width: auto;
    grid-template-columns: auto auto auto;
    row-gap: 40px;

  @media (max-width: 36em) {
    min-width: auto;
    grid-template-columns: auto auto;
    row-gap: 32px;

  @media (max-width: 24em) {
    min-width: auto;
    grid-template-columns: auto;
`;


const Gallery = () => {
  const [loading, setLoading] = useState(true)
  const [endDisplayIdx, setEndDisplayIdx] = useState(GalleryDisplayAmountInit)
  const [metadata, setMetadata] = useState([])
  const [data, setData] = useState([])
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
                  />
                )})}
        </ImageBox>
    </Section>
  );
};

export default Gallery;
