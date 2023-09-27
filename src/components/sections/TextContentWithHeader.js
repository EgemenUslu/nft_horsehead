import styled from 'styled-components';
import SignatureLine from './SignatureLine';
import Footer from './Footer';

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

const TextContentWithHeader = ({update_location, location, header, content}) => {
  return (
    <Section id={`TextContentWithHeader - ${location}`}>      
      <DisplayContainer>
        <Header>{header}</Header>
        {content}
      </DisplayContainer>
      <SignatureLine
        overwrite='margin-top: 8px;'
      />
      <Footer update_location={update_location}/>
    </Section>
  );
};

export default TextContentWithHeader;