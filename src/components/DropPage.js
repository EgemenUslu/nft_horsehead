import React from 'react';
import styled from 'styled-components';
import ShowCase from './sections/ShowCase';
import { DROP_SECTIONS_DATA } from '../config';


const Section = styled.section`
  position: relative;
  background: none;
  width: 100%;
`;


const DropPage = () => {
  return (
    <Section>
      {DROP_SECTIONS_DATA.map((section, index) => (
        <ShowCase
          key={index}
          no={index}
          header={section.header}
          body={section.body}
          visual={section.visual}
        />
      ))}
    </Section>
  );
};

export default DropPage;
