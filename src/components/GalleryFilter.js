import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Filter from './filter/Filter';

const GalleryFilterBox = styled.div`
  position: relative;
  background: none;
  padding: 50px;
  width: 266px;

  display: flex;
  flex-direction: column;

  @media (max-width: 68em) {
    padding: 0px;
    padding-bottom: 40px;

    width: 80vw;
    max-width: 32em;
  }
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #FFF;

  color: #FFF;
  font-family: Ubuntu;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: white;

`;

const GalleryButton = styled.div`
  position: relative;
  width: 100%;
  height: 46px;
  color: black;

  margin-top: 10px;
  background: #FFF;
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
`;


const GalleryFilter = (props) => {

  return (
    <GalleryFilterBox id="gallery_filter">      
      <HeaderBox>GALLERY</HeaderBox>
      <Filter
        layers={props.layers}
        updateLayers={props.updateLayers}
      />
      <GalleryButton onClick={props.cleanAllFilters} >
        CLEAR FILTERS
      </GalleryButton>      
      <GalleryButton onClick={props.randomizeDisplayData}>
        RANDOMIZE
      </GalleryButton>
    </GalleryFilterBox>
  );
};

export default GalleryFilter;
