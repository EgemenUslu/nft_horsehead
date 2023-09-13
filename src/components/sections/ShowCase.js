import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VerticalSeperator from './VerticalSeperator';

const Section = styled.section`
  position: relative;
  background: none;
  width: 100%;
`;

const Container = styled.section`
  position: relative;
  background: none;
  padding: 0px 100px;

  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction };
`;

const Text = styled.text`
  font-family: Amaranth;
  font-size: 32px;
  font-weight: 400;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 39px;
`;

const TextBox = styled.div`
  max-width: 44vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  color: #FFFFFF;
  margin: 40px 40px 0px 0px;
 
  font-family: Ubuntu;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
`;


const ImageBox = styled.img`
  width: 24vw;
  height: 24vw;
  overflow: hidden;
  border-radius: 40px;
`;

const ShowCase = ({no, body, visual}) => {
  const [current, setCurrent] = useState(0)
   

  useEffect(() => {
    const interval = setInterval(() => setCurrent((current+1)%8), 500);
    return () => {
      clearInterval(interval);
    };
  }, [current]);

  console.log(no);

  return (
    <Section key={no}>
      <Container 
        key={no}
        direction={no%2 ? 'row' : 'row-reverse'}
      >      
          <TextBox>
            {body}
          </TextBox>
          <ImageBox 
            key={no} 
            src={visual}
          />
      </Container>
      <VerticalSeperator/>
    </Section>
  );
};

export default ShowCase;
