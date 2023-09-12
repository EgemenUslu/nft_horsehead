import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/Logo.png';

const LogoContainer = styled.div`
  background: none;
  width: 400px;

  position: relative;
`;

const Image = styled.img`
  background: none;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
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
