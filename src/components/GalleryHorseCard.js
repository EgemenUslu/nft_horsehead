import React, { useState }  from 'react';
import styled from 'styled-components';
import { BackgroundColorMap } from '../config';
import HorseCardModal from './HorseCardModal';


const ImgContainer = styled.div`
  width: 220px;
  height: 220px;

  transition: all 0.2s ease;
  background: ${props => props.color};
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;   

  display: flex;
  flex-direction: column;
  justify-content: end;
  
  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 220px;
    max-height: 220px;
  }

  @media (max-width: 64em) {
    width: auto;
    height: 220px;
  }
`;

const Img = styled.img`
  background: transparent;
`;

const Name = styled.text`
  font-family: Amaranth;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: white;

  padding-top: 16px;
  
  @media (max-width: 80em) {
    padding-top: 8px;
  }
`;

const GalleryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% + 40px);

  transition-duration: .3s;
  animation: fadeIn 1s ease-in-out;   
  
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @media (max-width: 64em) {
  height: calc(100% + 12px);
  }
`;


const GalleryHorseCard = (props) => {
  const [displayModal, setDisplayModal] = useState(false)
  
  const closeModal = () => {
    setDisplayModal(false);
  }

  console.log(props.data)
  return (
    <GalleryCardContainer>
      <ImgContainer 
        onClick={() => setDisplayModal(true)} 
        color={BackgroundColorMap[props.data.attributes['1. Backgrounds'][0]]}
      >
        <Img src={props.token_uri} alt=''/>
      </ImgContainer>
      <Name>META HORSE #{props.data.edition}</Name>
      {displayModal &&
        <HorseCardModal
          data={props.data}
          token_uri={props.token_uri}
          closeModal={closeModal}
        />
      }
    </GalleryCardContainer>
  );
};

export default GalleryHorseCard;
