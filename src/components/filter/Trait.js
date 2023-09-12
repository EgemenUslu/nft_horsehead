import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TraitBox = styled.div`
  position: relative;
  background: none;
  min-height: 32px;
  height: fit-content;

  border-top: 1px solid gray;
  cursor: pointer;

  display: flex;
  justify-content: left;
  align-items: center;
  }
`;

const TraitName = styled.div`
    font-family: Amaranth;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: white;

    margin: 4px 8px;  
  }
`;

const Occurrence = styled.div`
    font-family: Amaranth;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: gray;
  }
`;

const Checkbox = styled.div`
    height: 12px;
    width: 12px;
    min-height: 12px;
    min-width: 12px;
    border: 1px gray solid;

    background: ${props => props.background};
  }
`;

const Trait = (props) => {
  const [isClicked, setIsClicked] = useState(props.layers[props.layer_name][props.trait_name].clicked)
  
  useEffect(() => {
    setIsClicked(props.layers[props.layer_name][props.trait_name].clicked)
  }, [props])

  const handleClick = () => {
    setIsClicked(!isClicked);
    props.updateLayers(
        {'layer_name':props.layer_name,
        'trait_name':props.trait_name,
        'clicked':!props.layers[props.layer_name][props.trait_name].clicked})
  };

  return (
    <TraitBox 
        id={props.trait_name}
        onClick={handleClick}
    >   
        <Checkbox
            background = {isClicked ? 'white': 'transparent'}
        ></Checkbox> 
        <TraitName>{props.trait_name}</TraitName> 
        <Occurrence>({props.trait_data.occurrence})</Occurrence> 
    </TraitBox>
  );
};

export default Trait;