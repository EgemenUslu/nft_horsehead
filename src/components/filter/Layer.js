import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LayerNameMap } from '../../config';
import Trait from './Trait';

const LayerBox = styled.div`
  position: relative;
  background: none;
  width: 100%;
  border-bottom: 1px solid #FFF; 
`;

const LayerTitleBox = styled.div`
  position: relative;
  background: none;
  height: 40px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;  
`;

const LayerName = styled.div`
  color: #FFF;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  color: white;
`;

const LayerDisplayIcon = styled.div`
  font-family: Ubuntu;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: right;
  color: white;
`;

const TraitBox = styled.div`
  background: none;
  width: 100%;
  max-height: 400px;
  overflow-x:hidden;

  @media (max-width: 68em) {
    width: 90vw;
    max-width: 32em;
  }
`;
const Layer = (props) => {
    const [displayOptions, setDisplayOptions] = useState(false)
    console.log('Layer: ', props);

    useEffect(() => {
      setDisplayOptions(false);
  
      console.log("Refresh triggered in Filter component!");
    }, [props.refreshFlag]);

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