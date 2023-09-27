import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PRIVACY_POLICY_DATA } from '../config';
import TextContentWithHeader from './sections/TextContentWithHeader';

const Paragraph = styled.text`
  color: #FFF;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;

  width: 100%;
`;

const PrivacyPolicy = ({ update_location, location }) => {

  return (
    <TextContentWithHeader
      id={"privacy_policy"}
      update_location={update_location}
      location={location}
      header={'PRIVACY POLICY'}
      content={
        PRIVACY_POLICY_DATA.map((paragraph, index) => (
          <Paragraph key={index}>
            {paragraph}
          </Paragraph>
        ))
      }
    />
  );
};

export default PrivacyPolicy;
