import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layer from './Layer';

const FilterContainer = styled.div`
  position: relative;
  background: none;
  max-height: calc(100vh - 500px);
  overflow-x: hidden;
  overflow-y: visible;
  ::-webkit-scrollbar {display:none;}

  display: flex;
  flex-direction: column;

  }
`;


const Filter = (props) => {
  console.log('Filter: ', props, props.layers);

  return (
    <FilterContainer id="filter">      
      {Object.keys(props.layers).length > 0 &&
        Object.entries(props.layers).map((layer)=> (
          <Layer
            layers = {props.layers}
            layer_name = {layer[0]}
            layer_data= {layer[1]}
            updateLayers={props.updateLayers}
          />
        ))
      }
    </FilterContainer>
  );
};

export default Filter;
