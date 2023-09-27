import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FAQ_DATA } from '../config';
import SignatureLine from './sections/SignatureLine';
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
padding-top: 180px;

min-width: 1024px;
width: 62vw;

@media (max-width: 84em) {
  width: 90vw;
  min-width: 90vw;
}
`;

const Header = styled.div`
  font-family: Ubuntu;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;

  margin-bottom: 56px;
  width: 100%;

  color: white;
`;

const SingleFaqContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;

  margin-top: ${props => props.marginTop};
`;

const Question = styled.text`
  color: #FFF;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Answer = styled.text`
  color: #FFF;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 8px;
`;


const QA = ({question, answer, id}) => {
  return (
    <SingleFaqContainer
      id={`QA: ${id}`}
      key={id}
      marginTop={id === 0 ? '0px': '32px'}
    >
      <Question>{question}</Question>
      <Answer>{answer}</Answer>
    </SingleFaqContainer>
  )
};


const FAQ = ({update_location, location}) => {
  return (
    <Section id={location}>      
      <DisplayContainer>
        <Header>FAQ</Header>
        {FAQ_DATA.map((faq, index) => (
          <QA
            id={index}
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </DisplayContainer>
      <SignatureLine
        overwrite='margin-top: 8px;'
      />
      <Footer update_location={update_location}/>
    </Section>
  );
};

export default FAQ;
