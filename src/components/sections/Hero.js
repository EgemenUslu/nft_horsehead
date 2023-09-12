import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BackgroundColorMap, FirstNineMHSBacgroundColors, ModalTextColorMap, SMALL_IMAGE_BASE_URL, SMALL_IMAGE_URL } from '../../config';


const Section = styled.section`
  position: relative;
  background: none;
  width: 100%;

  background: ${props => props.color};
  color: ${props => props.textColor};
  }
`;

const Container = styled.section`
  position: relative;
  background: none;

  display: flex;
  justify-content: center;
  background: inherit;
  color:inherit;

  @media (max-width: 84em) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
`;
const Header = styled.div`
  font-family: Ubuntu;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: inherit;
  color: inherit;

  @media (max-width: 84em) {
    font-size: 32px;
  }
`;


const Text = styled.text`
  font-family: Ubuntu;
  margin-top: 40px;
  background: inherit;
  color:inherit;
`;

const TextBox = styled.div`
  max-width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: inherit;
  margin-top: 40vh;
  margin-left: -10vw;

  background: inherit;
 
  font-family: Ubuntu;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal; 
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 84em) {
    max-width: 100vw;
    margin-top: 0;
    margin-left: 0;
    max-width: 100%;
    padding: 4vh;
    padding-bottom: 10vh;
  }
`;


const ImageBox = styled.img`
  width: auto;
  height: 100vh;
  background: ${props => props.color};
  margin-left: -10vw;

  @media (max-width: 84em) {
    width: 100vw;
    height: auto;
    margin-left: 10vw;
  }
`;


const ButtonContainer = styled.div`
  margin-top: 10vh;
  align-self: flex-center;
  position: relative;
  background: inherit;
  color:inherit;
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

const Btn = styled.button`
  display: inline-block;
  width: 15vw;
  height: 7.13vh;
  color: ${props => props.textColor};
  background: rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  margin-top: -3.33vh;

  font-size:  min(2vw, 5vh);
  font-family: Ubuntu;
  border-radius: 143px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  @media (max-width: 84em) {
    font-size:  min(8vw, 4vh);
    width: 40vw;
    height: auto;
  }

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.textColor};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
    background: none;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const Button = ({ text, onClick, current }) => {
  return (
    <Btn 
      onClick={onClick}      
      textColor={ModalTextColorMap[FirstNineMHSBacgroundColors[current]]}
      text={text}
    >
        {text}
    </Btn>
  );
};

const Hero = ({update_location, location}) => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 64 * 16); // Using 16px as the standard browser font-size
  
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 64 * 16);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((current+1)%8), 2000);
    return () => {
      clearInterval(interval);
    };
  }, [current]);

  return (
    <Section
        id={location}
        color={BackgroundColorMap[FirstNineMHSBacgroundColors[current]]}
        textColor={ModalTextColorMap[FirstNineMHSBacgroundColors[current]]}
      >
      <Container id="Hero">           
        <ImageBox 
          src={SMALL_IMAGE_URL(current + 1)}
          color={BackgroundColorMap[FirstNineMHSBacgroundColors[current]]}
        />      
        <TextBox>
            <Header>{isMobile ? 'Welcome to the MHS' : 'Welcome to the META HORSE SOCIETY'}</Header>
            <Text>
              Unleash your power, own a piece of the digital future, become a part of a pioneering NFT community.
            </Text>
            <ButtonContainer>
              <Button 
                text="ENTER" 
                onClick={()=>update_location('city_house')} 
                current={current} />
            </ButtonContainer>
        </TextBox>
      </Container>
    </Section>
  );
};

export default Hero;
