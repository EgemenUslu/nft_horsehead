
import styled from 'styled-components';
import VerticalSeperator from './VerticalSeperator';
import EmptyPromise from '../../assets/empty_promise.png';
import Bar from '../../assets/bar.png';
import Basement from '../../assets/basement.png';

const Section = styled.section`
  position: relative;
  background: none;
  padding: 0px 50px;
  width: 100%;
  }
`;

const Container = styled.section`
  position: relative;
  background: none;

  @media (max-width: 64em) {
    flex-direction: column-reverse;
  }
`;
const Header = styled.div`
  font-family: Amaranth;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: 0em;
  text-align: left;
`;


const Text = styled.div`
  color: white;
  position: sticky;
  bottom: 8px;
  margin-left: 24px;
  background: none;

  font-family: Amaranth;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: 0em;
  text-align: left;  
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #FFFFFF;
  margin-right: 40px;
 
  font-family: Amaranth;
  font-size: 48px;
  font-weight: 400;
  line-height: 58px;
  letter-spacing: 0em;
  text-align: left;
`;


const ImageBox = styled.div`
  height: 202px;
  overflow: hidden;
  border-radius: 20px;
  margin-top: 24px;
`;

const Image = styled.img`
  height: 202px;
  overflow: hidden;
  border-radius: 20px;
`;

const FloorsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
`;

const FloorCard = (props) => {
  return (
    <ImageBox>
      <Image src={props.image_source}/>
      <Text>{props.text}</Text>
    </ImageBox>
  );
};

const Floors = () => {

  return (
    <Section>
      <Container id="floors">      
          <TextBox>
              <Header>WILL BE OPEN AFTER REACHING %100 ON ROADMAP</Header>
          </TextBox>
          <FloorsContainer>
            <FloorCard
              image_source={EmptyPromise}
              text="TOP FLOOR - CYBERNETICS"
            />          
            <FloorCard
              image_source={Bar}
              text="FIRST FLOOR - BAR"
            />
            <FloorCard
              image_source={Basement}
              text="BASEMENT - MUTATION"
            />          
          </FloorsContainer>

      </Container>
      <VerticalSeperator/>
    </Section>
  );
};

export default Floors;
