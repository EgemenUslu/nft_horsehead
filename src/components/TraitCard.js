import React from 'react';
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
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;  
  
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

const TraitCard = ({name, data}) => {
  console.log(name,data)
  return(
    <TraitBox>
      <Title>{LayerNameMap[name]}:</Title>
      <Value>{data[0].toUpperCase()}</Value>
    </TraitBox>
  )
}

export default TraitCard;
