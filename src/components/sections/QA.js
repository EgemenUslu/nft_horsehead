import React from 'react';
import styled from 'styled-components';


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

export default QA;
