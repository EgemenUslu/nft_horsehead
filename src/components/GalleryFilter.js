import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Filter from './filter/Filter';

const GalleryFilterBox = styled.div`
  position: relative;
  background: none;
  padding: 50px;

  display: flex;
  flex-direction: column;

  @media (max-width: 64em) {
    padding: 0px;
    padding-bottom: 40px;
  }
`;

const HeaderBox = styled.div`
  width: 226px;
  height: 100px;
  border-bottom: 1px solid #D8821B;

  font-family: Amaranth;
  font-size: 64px;
  font-style: italic;
  font-weight: 400;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  
  @media (max-width: 64em) {
    width: 90vw;
  }
`;

const GalleryButton = styled.div`
  position: relative;
  width: 226px;
  height: 46px;
  color: black;

  margin-top: 10px;
  background: #D8821B;
  border-radius: 9px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-family: Amaranth;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 64em) {
    width: 90vw;
  }
`;


const GalleryFilter = (props) => {

  return (
    <GalleryFilterBox id="gallery_filter">      
      <HeaderBox>Gallery</HeaderBox>
      <Filter
        layers={props.layers}
        updateLayers={props.updateLayers}
      />
      <GalleryButton onClick={()=>props.cleanAllFilters()} >
        CLEAR FILTERS
      </GalleryButton>      
      <GalleryButton >
        RANDOMIZE
      </GalleryButton>
    </GalleryFilterBox>
  );
};

export default GalleryFilter;
