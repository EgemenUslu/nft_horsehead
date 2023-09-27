import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';

import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Roadmap from "./components/Roadmap";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";


function App() {
  const [location, setLocation] = useState('landing');
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    // This will run every time location changes.
    if (location === "privacy_policy" | location === "terms_and_conditions") {
      // Since we're unsure if the DOM has finished rendering the component, 
      // let's give it some time using setTimeout.
      setTimeout(() => {
        const element = document.getElementById(location);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);  // Giving it a 100ms delay to ensure component renders.
    }
  }, [location]);

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
      <MainContainer
        id="mainContainer"
      >
        <ThemeProvider theme={dark} id={location}>
          <Navigation update_location={update_location} location={location}/>
          {
            location === 'landing'?
              <LandingPage update_location={update_location} location={location}/>
              :
            location === 'gallery'?
              <Gallery update_location={update_location} location={location} />
              :
            location === 'faq'?
              <FAQ update_location={update_location} location={location} />
              :
            location === 'roadmap'?
              <Roadmap update_location={update_location} location={location} />
              :
            location === 'privacy_policy'?
              <PrivacyPolicy update_location={update_location} location={location} />
              :
            location === 'terms_and_conditions'?
              <TermsAndConditions update_location={update_location} location={location} />
              :
            <></>
          }
        </ThemeProvider>
      </MainContainer>
    </>
  );
}

export default App;
