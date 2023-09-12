import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LayerNameMap } from '../../config';
import Trait from './Trait';

const LayerBox = styled.div`
  position: relative;
  background: none;
  width: 226px;
  border-bottom: 1px solid #D8821B; 

  @media (max-width: 64em) {
    width: 90vw;
  }
  }
`;

const LayerTitleBox = styled.div`
  position: relative;
  background: none;
  height: 40px;
  width: 226px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;  
  
  @media (max-width: 64em) {
    width: 90vw;
  }
  }
`;

const LayerName = styled.div`
    font-family: Amaranth;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
  }
`;

const LayerDisplayIcon = styled.div`
    font-family: Amaranth;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: right;
    color: white;
}
`;

const TraitBox = styled.div`
  background: none;
  width: 226px;
  max-height: 400px;
  overflow-x:hidden;

  @media (max-width: 64em) {
    width: 90vw;
  }
`;
const Layer = (props) => {
    const [displayOptions, setDisplayOptions] = useState(false)
    console.log('Layer: ', props);

    return (
        <LayerBox id="layer">       
            <LayerTitleBox
                onClick={() => setDisplayOptions(!displayOptions)}
            >
                <LayerName>
                    {LayerNameMap[props.layer_name]}
                </LayerName>
                <LayerDisplayIcon>
                    {displayOptions ? '-':'+'}
                </LayerDisplayIcon>     
            </LayerTitleBox>
            {displayOptions &&
                <TraitBox>
                    {Object.entries(props.layer_data).map((trait)=> (
                        <Trait
                        key = {`${props.layer_name}_${trait[0]}`}
                        layers={props.layers}
                        layer_name = {props.layer_name}
                        trait_name = {trait[0]}
                        trait_data = {trait[1]}
                        updateLayers = {props.updateLayers}
                        />
                    ))}
                </TraitBox>
            }
        </LayerBox>
    );
};

export default Layer;