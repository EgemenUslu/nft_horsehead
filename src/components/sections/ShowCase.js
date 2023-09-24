import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VerticalSeperator from './VerticalSeperator';
import { BackgroundColorMap } from '../../config';
import GenerationFinal from '../../assets/generationFinal.png';

const Section = styled.section`
  position: relative;
  width: 100%;
  background:  ${(props) => props.background};
`;

const Container = styled.section`
  position: relative;
  background: inherit;
  padding: 0px 100px;

  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction };

  @media (max-width: 64em) {
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.text`
  font-family: Ubuntu;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal; 
  text-align: left;
  margin-top: 39px;
  background: inherit;
`;

const TextBox = styled.div`
  max-width: 44vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  color: #FFFFFF;
  margin:  ${(props) => props.margin};
  background: inherit;
 
  font-family: Ubuntu;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
`;


const ImageBox = styled.img`
  width: auto;
  height: auto;
  overflow: hidden;
  border-radius: 40px;
  background: inherit;

`;

const ShowCase = ({no, header, body, visual}) => {
  const [current, setCurrent] = useState(0)
  const [isArtFinal, setIsArtFinal] = useState(false)
   

  useEffect(() => {
    const interval = setInterval(() => setCurrent((current+1)%12), 750);
    if(header === "MHS Art" && current >= 7){
      setIsArtFinal(true)
    } else {
      setIsArtFinal(false)
    }
    return () => {
      clearInterval(interval);
    };
  }, [current]);

  console.log(no);

  return (
    <Section 
      key={no}
      id={header}
      background={isArtFinal ? BackgroundColorMap['Maroon'] : 'none'}
    >
      <Container 
        key={no}
        direction={no%2 ? 'row' : 'row-reverse'}
      >      
          <TextBox
            margin={no%2 ? '40px 80px 0px 0px' : '40px 0px 0px 80px'}
          >
            {
              body.map((paragraph) => (
                  <Text>
                    {paragraph}
                  </Text>
                )
              )
            }
          </TextBox>
          <ImageBox 
            key={no} 
            src={isArtFinal ? GenerationFinal : visual}
          />
      </Container>
      <VerticalSeperator
        overwrite={header === "MHS Art" ? 
        `
        margin: 0px 0px 99px -10vw;
        height: 100px;
        background: black;
        border-bottom: 1px solid #705D71;
        `
        : 
        ''
      }
      />
    </Section>
  );
};

export default ShowCase;
