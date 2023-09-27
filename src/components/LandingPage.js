import React from 'react';
import styled, { keyframes } from 'styled-components';
import Hero from "./sections/Hero";
import DropPage from './DropPage';
import Footer from './sections/Footer';


const Section = styled.section`
  position: relative;
  background: none;  
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 100vw;
    max-width: 100vw;
  }
`;


const DisplayContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 100px;

min-width: 1024px;
width: 80vw;

@media (max-width: 84em) {
  width: 100vw;
  min-width: 100vw;
}
`;


const LandingPage = ({update_location, location}) => {
  return (
    <Section id={location}>      
       <Hero update_location={update_location} location={location}/>  
       <DisplayContainer>
          <DropPage/>
       </DisplayContainer>
       <Footer update_location={update_location}/>
    </Section>
  );
};

export default LandingPage;
