import React from 'react';
import styled from 'styled-components';
import { ROADMAP_DATA } from '../config';
import TextContentWithHeader from './sections/TextContentWithHeader';


const Paragraph = styled.text`
  color: #FFF;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 8px;
`;


const Roadmap = ({update_location, location}) => {
  return (
    <TextContentWithHeader
      update_location={update_location}
      location={location}
      header={'ROADMAP'}
      content={
        ROADMAP_DATA.map((paragraph, index) => (
          <Paragraph
            key={index}
          >
            {paragraph}
          </Paragraph>

        ))
      }
    />
  );
};

export default Roadmap;
