import React from 'react';
import { FAQ_DATA } from '../config';
import TextContentWithHeader from './sections/TextContentWithHeader';
import QA from './sections/QA';


const FAQ = ({update_location, location}) => {
  return (
    <TextContentWithHeader
      update_location={update_location}
      location={location}
      header={'FAQ'}
      content={
        FAQ_DATA.map((faq, index) => (
          <QA
            id={index}
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))
      }
    />
  );
};

export default FAQ;
