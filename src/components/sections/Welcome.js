import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FirstNineMHSBacgroundColors, SMALL_IMAGE_BASE_URL, SMALL_IMAGE_URL } from '../../config';
import HorseCard from '../HorseCard';

const Section = styled.section`
  position: relative;
  background: none;
  padding: 50px;
  width: 100%;

  display: flex;
  justify-content: center;

  @media (max-width: 64em) {
    flex-direction: column;
    align-items: center;
    padding: 4px;
  }
`;

const Header = styled.div`
  font-family: Amaranth;
  font-size: 40px;
  font-style: italic;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
`;


const Text = styled.text`
  font-family: Amaranth;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  margin-top: 24px;
`;

const TextBox = styled.div` 
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

  
  @media (max-width: 64em) {
    max-width: 90vw;
    margin: 5vw;
  }
`;


const ImageBox = styled.div`
  display: grid; 
  
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  column-gap: 20px;
  row-gap: 20px;

`;


const Welcome = () => {

  return (
    <Section id="welcome">      
        <TextBox>
            <Header>Welcome to the MetaHorse Society</Header>
            <Text>In this 2022 Bear Market, we are launching our project, hoping to increase the demand back the way it used to for the NFT world.</Text>
            <Text>
              MHS is a collection of 10,000 Majestic Horse Head NFTs—unique digital collectibles living on the Ethereum blockchain. Your Horse Head grants access to members-only benefits, the first of which will be access to THE BACKROOM, a member exclusive merch store.
            </Text>
            <Text>
              Future areas like upstairs and downstairs and different perks can be unlocked by the community through roadmap activation.
            </Text>
            <Text>
              Ownership and commercial usage rights given to the consumer over their NFT.
            </Text>
        </TextBox>
        <ImageBox>
          {[1,2,3,4,5,6,7,8,9].map((item) => {
                return (
                  <HorseCard token_uri={SMALL_IMAGE_URL(item)} color={FirstNineMHSBacgroundColors[item-1]}/>
                )})} 
        </ImageBox>
    </Section>
  );
};

export default Welcome;
