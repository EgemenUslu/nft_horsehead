import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';


const CityHouse = 'https://bafybeifi27awggzseitg2s2wtpqexfzxkrfvao2wxdporp7miq6icrgeeu.ipfs.w3s.link/cityhouse.png';
const Bar  = 'https://bafybeid2ss3vn32lez2su22akd3l6ry6ja6tfp7ypvywasresumeztfdje.ipfs.w3s.link/bar_image.png';
const Section = styled.section`
  position: relative;
  background: none;  

  @media (max-width: 64em) {
    width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
  }
`;

const Container = styled.div`
  max-width: 57.24vw;
  position: relative;
  height: 78.15vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 100vh;
  }

  @media (max-width: 48em) {
    width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Image = styled.img`
  max-width: 65vw;
  max-height: 78.15vh; 
  
  @media (max-width: 64em) {
    width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
  }

`;


const ButtonContainer = styled.div`
  width: 57.24vw;
  height: 7.3vh;
  align-self: flex-start;
  position: relative;
  margin-bottom: -7.3vh;
  background: none;
  z-index: 1;

  display: flex;
  justify-content: center;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

const LandingPage = ({update_location, location}) => {
  return (
    <Section id={location}>      
      <Container>
        <Image src={location==='landing'?CityHouse:Bar}/>   
        {location==='landing'&&   
          <ButtonContainer>
            <Button text="ENTER" onClick={()=>update_location('city_house')} />
          </ButtonContainer>
        }
      </Container>
    </Section>
  );
};

export default LandingPage;
