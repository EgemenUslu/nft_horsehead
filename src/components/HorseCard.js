import React, { useState } from 'react';
import styled from 'styled-components';
import { BackgroundColorMap } from '../config';


const ImgContainer = styled.div`
  width: 160px;
  height: 160px;
  background: ${props => props.color};

  transition: all 0.2s ease;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;  
  
  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: auto;
    display: ${props => (props.isImgLoaded ? 'block' : 'none')};
  }
`;


const NftItem = ({img, color}) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImgLoaded(true);
  };

  const handleImageError = () => {
    setIsImgLoaded(false);
  };

  return (
    <ImgContainer color={BackgroundColorMap[color]} isImgLoaded={isImgLoaded}>
      <img 
        src={img} 
        alt="MetaHorse" 
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </ImgContainer>
  );
};

const HorseCard = ({token_uri, color}) => {
  console.log(token_uri);
  return (
    <NftItem img={token_uri} color={color}/>
  );
};

export default HorseCard;
