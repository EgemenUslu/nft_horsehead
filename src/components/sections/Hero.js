import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLOR_FOR_HERO, HERO_NFTS, SMALL_IMAGE_URL } from '../../config';


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
  margin-left: -4vw;

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
  display: ${props => props.display};
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


const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  z-index: 0;
`;

const CountdownSegment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 56px;
  background: none;
`;

const CountdownValue = styled.div`
  width: 92px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;

  color: #FFF;
  font-family: Ubuntu;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CountdownLabel = styled.div`
  color: #FFF;
  font-family: Ubuntu;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: none;
`;

const Button = ({ text, onClick, current }) => {
  return (
    <Btn 
      onClick={onClick}      
      textColor={COLOR_FOR_HERO('text', current)}
      text={text}
    >
        {text}
    </Btn>
  );
};

const formatNumber = number => number < 10 ? `0${number}` : number;

const Hero = ({update_location, location}) => {
  const [current, setCurrent] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 64 * 16);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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
    const interval = setInterval(() => {
      setImageLoaded(false);  // Reset imageLoaded state before updating current
      setCurrent((prevCurrent) => (prevCurrent + 1) % 8);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [current]);

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date('October 22, 2023');
    const difference = targetDate - now;
    
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  

  return (
    <Section
        id={location}
        color={COLOR_FOR_HERO('background', current)}
        textColor={COLOR_FOR_HERO('text', current)}
      >
      <Container id="Hero">  
        {
          [...Array(8).keys()].map(no => (
            <ImageBox 
              id={HERO_NFTS[no]}
              key={no}
              display={no === current ? 'block' : 'none'}
              onLoad={() => setImageLoaded(true)}
              src={SMALL_IMAGE_URL(HERO_NFTS[no])}
              color={imageLoaded && no === current ? COLOR_FOR_HERO('background', current) : 'initial'}
            />
          ))
        }
    
        <TextBox>
            <Header>{isMobile ? 'Welcome to the MHS' : 'Welcome to METAHORSE SOCIETY'}</Header>
            <Text>
              Unleash your power, own a piece of the digital future, become a part of a pioneering NFT community.
            </Text>
            <ButtonContainer>
              <CountdownContainer>
                <CountdownSegment>
                  <CountdownValue>{formatNumber(timeLeft.days)}</CountdownValue>
                  <CountdownLabel>days</CountdownLabel>
                </CountdownSegment>
                <CountdownSegment>
                  <CountdownValue>{formatNumber(timeLeft.hours)}</CountdownValue>
                  <CountdownLabel>hrs</CountdownLabel>
                </CountdownSegment>
                <CountdownSegment>
                  <CountdownValue>{formatNumber(timeLeft.minutes)}</CountdownValue>
                  <CountdownLabel>min</CountdownLabel>
                </CountdownSegment>
                <CountdownSegment>
                  <CountdownValue>{formatNumber(timeLeft.seconds)}</CountdownValue>
                  <CountdownLabel>sec</CountdownLabel>
                </CountdownSegment>
              </CountdownContainer>
            </ButtonContainer>
        </TextBox>
      </Container>
    </Section>
  );
};

export default Hero;
