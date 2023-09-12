import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import React, { useState } from 'react';
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';

import Navigation from "./components/Navigation";
import Roadmap from './components/sections/Roadmap';
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./components/sections/LandingPage";
import Welcome from "./components/sections/Welcome";
import Buy from "./components/sections/Buy";
import Specs from "./components/sections/Specs";
import Floors from "./components/sections/Floors";
import Gallery from "./components/Gallery";
import Hero from "./components/sections/Hero";

function App() {
  const [location, setLocation] = useState('landing');
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const update_location = (location) => {
    setLocation(location);
  }

  const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const DisplayContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-width: 1024px;
    width: 60vw;

    @media (max-width: 64em) {
      width: 100vw;
    }
  `;

  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <ThemeProvider theme={dark} id={location}>
          {location !== 'landing' && <Navigation update_location={update_location} location={location}/> }
          {
            location === 'landing'?
              <Hero update_location={update_location} location={location}/>  
              // <LandingPage update_location={update_location} location={location}/>
              :
            location === 'city_house'?
              <DisplayContainer>
                <LandingPage update_location={update_location} location={location}/>
                <Welcome />
                <Buy />
                <Specs />
                <Roadmap />
                <Floors/>
                <ScrollToTop />
              </DisplayContainer>
              :
            location === 'gallery'?
              <Gallery />
              :
              <></>
          }
        </ThemeProvider>
      </MainContainer>
    </>
  );
}

export default App;
