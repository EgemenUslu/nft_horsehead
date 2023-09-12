import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import React, { useState } from 'react';
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';

import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Gallery from "./components/Gallery";


function App() {
  const [location, setLocation] = useState('landing');
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const update_location = (location) => {
    setLocation(location);
  }

  const MainContainer = styled.div`
    justify-content: center;
    align-items: center;
  `;
  

  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <ThemeProvider theme={dark} id={location}>
          <Navigation update_location={update_location} location={location}/>
          {
            location === 'landing'?
              <LandingPage update_location={update_location} location={location}/>
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
