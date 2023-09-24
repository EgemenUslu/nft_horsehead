import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logoSmall.png';

const LogoContainer = styled.div`
  background: none;
  height: ${(props) => props.theme.navHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Image = styled.img`
  background: none;
  transition: all 0.2s ease;
  height: 100px;
  width: auto;
  margin-left: 80px;


  &:hover {
    transform: scale(1.1);
  } 
  
  @media (max-width: 64em) {
    margin-left: 24px;
  }
`;

const Logo = (props) => {
  return (
    <LogoContainer onClick={() => props.update_location('landing')}>
      <Image src={logo}/>
    </LogoContainer>
  );
};

export default Logo;
