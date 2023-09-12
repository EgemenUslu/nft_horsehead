import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BackgroundColorMap, FirstNineMHSBacgroundColors, SMALL_IMAGE_BASE_URL, SMALL_IMAGE_URL } from '../../config';
import { Api } from '../../helpers/api';
import HorseCard from '../HorseCard';
import VerticalSeperator from './VerticalSeperator';

const Section = styled.section`
  position: relative;
  background: none;
  padding: 0px 50px;
  width: 100%;
  }
`;

const Container = styled.section`
  position: relative;
  background: none;

  display: flex;
  justify-content: center;

`;
const Header = styled.div`
  font-family: Amaranth;
  font-size: 64px;
  font-style: italic;
  font-weight: 400;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: left;
`;


const Text = styled.text`
  font-family: Amaranth;
  font-size: 32px;
  font-weight: 400;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 39px;
`;

const TextBox = styled.div`
  max-width: 24vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #FFFFFF;
  margin-right: 40px;
 
  font-family: Amaranth;
  font-size: 48px;
  font-weight: 400;
  line-height: 58px;
  letter-spacing: 0em;
  text-align: left;
`;


const ImageBox = styled.img`
  width: 24vw;
  height: 24vw;
  overflow: hidden;
  border-radius: 40px;
  background: ${props => props.color};
`;

const Specs = () => {
  const [current, setCurrent] = useState(0)
   

  useEffect(() => {
    const interval = setInterval(() => setCurrent((current+1)%8), 500);
    return () => {
      clearInterval(interval);
    };
  }, [current]);

  return (
    <Section>
      <Container id="specs">      
          <TextBox>
              <Header>THE SPECS</Header>
              <Text>
                Each Horse Head is unique and programmatically generated from over 300 traits, including expression, hair and headwear, zebra and unicorn skins, and more. All horses are fabulous, but some are rarer than others.
              </Text>
              <Text>
                The horses are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. Purchasing a horse costs 0.5 ETH.
              </Text>
          </TextBox>
          <ImageBox 
            src={SMALL_IMAGE_URL(current + 1)}
            color={BackgroundColorMap[FirstNineMHSBacgroundColors[current]]}
          /> 
      </Container>
      <VerticalSeperator/>
    </Section>
  );
};

export default Specs;
