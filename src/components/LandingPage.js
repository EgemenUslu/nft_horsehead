import React from 'react';
import styled, { keyframes } from 'styled-components';
import Hero from "./sections/Hero";
import ShowCase from './sections/ShowCase';
import DropPage from './DropPage';


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
    max-height: 100vh;
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

@media (max-width: 64em) {
  width: 100vw;
}
`;


const LandingPage = ({update_location, location}) => {
  return (
    <Section id={location}>      
       <Hero update_location={update_location} location={location}/>  
       <DisplayContainer>
          <DropPage/>
       </DisplayContainer>
    </Section>
  );
};

export default LandingPage;
