import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TERMS_AND_CONDITIONS_DATA } from '../config';
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

const TermsAndConditions = ({ update_location, location }) => {

  return (
    <TextContentWithHeader
      id={"terms_and_conditions"}
      update_location={update_location}
      location={location}
      header={'TERMS AND CONDITIONS'}
      content={
        TERMS_AND_CONDITIONS_DATA.map((paragraph, index) => (
          <Paragraph key={index}>
            {paragraph}
          </Paragraph>
        ))
      }
    />
  );
};

export default TermsAndConditions;
