import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button';
import DiscordLogo from '../assets/discord_logo.png';
import InstagramLogo from '../assets/instagram_logo.png';
import TwitterLogo from '../assets/twitter_logo.png';

const Section = styled.section`
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${(props) => props.theme.navHeight};

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;

const NavBarRight = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
  }
`;


const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 70em) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);

    transform: ${(props) =>
      props.click ? 'translateY(0)' : 'translateY(1000%)'};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-family: Amaranth;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;


  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? '2rem' : '1.5rem')};
  height: 2px;
  background: ${(props) => props.theme.text};

  position: absolute;
  top: 6rem;
  right: 4em;
  transform: ${(props) =>
    props.click
      ? 'translate(-50%) rotate(90deg)'
      : 'translate(-50%) rotate(0)'};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    /* 1024px */
    display: flex;
  }

  &::after,
  &::before {
    content: ' ';
    width: ${(props) => (props.click ? '1rem' : '1.5rem')};
    height: 2px;
    right: ${(props) => (props.click ? '-2px' : '0')};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? '0.3rem' : '0.5rem')};
    transform: ${(props) => (props.click ? 'rotate(-40deg)' : 'rotate(0)')};
  }

  &::before {
    bottom: ${(props) => (props.click ? '0.3rem' : '0.5rem')};
    transform: ${(props) => (props.click ? 'rotate(40deg)' : 'rotate(0)')};
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  width: min-content;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }  
    
    @media (max-width: 64em) {
      /* 1024px */
      display: none;
    }
  }
`;

const Navigation = (props) => {
  const [click, setClick] = useState(false);


  const scrollTo = async (id) => {
    if(props.location!=='city_house'){
      await props.update_location('city_house');
    };

    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    setClick(!click);
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo update_location={props.update_location}/>
        <NavBarRight>
          <>   
            <Menu click={click}>
              <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
              <MenuItem onClick={() => scrollTo('welcome')}>Welcome</MenuItem>
              <MenuItem onClick={() => scrollTo('buy')}>Buy</MenuItem>
              <MenuItem onClick={() => scrollTo('specs')}>Specs</MenuItem>
              <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
              <MenuItem onClick={() => scrollTo('floors')}>Floors</MenuItem>
              <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
              <MenuItem onClick={() => props.update_location('gallery')}>Gallery</MenuItem>
            </Menu>
          </>
          <IconList>
              <a
                href="http://discord.com"
              >
                <img src={DiscordLogo}/>
              </a>
              <a
                href="http://instagram.com"
              >
                <img src={InstagramLogo}/>
              </a>
              <a
                href="http://twitter.com"
              >
                <img src={TwitterLogo}/>
              </a>
          </IconList>
          <HamburgerMenu click={click} onClick={() => setClick(!click)}>
            &nbsp;
          </HamburgerMenu>       
        </NavBarRight>
      </NavBar>
    </Section>
  );
};

export default Navigation;
