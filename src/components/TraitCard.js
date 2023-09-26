import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LayerNameMap } from '../config';


const TraitBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 0px 24px;
  margin: 0px 16px;

  min-height: 64px;
  width: 192px;
  background: ${props => props.background};
  border-radius: 10px; 
  cursor: pointer;
  
  @media (max-width: 80em) {
    width: calc(90vw - 48px - 32px);
  }

`;

const Title = styled.text`
  background: transparent;
  font-family: Amaranth;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;

  opacity: 0.4;
`;

const Value = styled.text`
  background: transparent;
  font-family: Amaranth;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

`;

const TraitCard = (props) => {
  console.log('TraitCard L1', props);
  const [isClicked, setIsClicked] = useState(props.layers[props.name][props.data[0]].clicked)
  
  useEffect(() => {
    setIsClicked(props.layers[props.name][props.data[0]].clicked)
  }, [props])

  const handleClick = () => {
    setIsClicked(!isClicked);
    props.updateLayers(
        {'layer_name':props.name,
        'trait_name':props.data[0],
        'clicked':!props.layers[props.name][props.data[0]].clicked,
        'clicked_from_mhs_id': props.mhsId
      })
  };

  return(
    <TraitBox
      onClick={handleClick}
      background={isClicked ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}
    >
      <Title>{LayerNameMap[props.name]}:</Title>
      <Value>{props.data[0].toUpperCase()}</Value>
    </TraitBox>
  )
}

export default TraitCard;
