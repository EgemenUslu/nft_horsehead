import styled from 'styled-components';
import opensea_button from '../../assets/opensea_button.png';
import find_your_horse_head from '../../assets/find_your_horse_head.png';
import VerticalSeperator from './VerticalSeperator';


const Section = styled.section`
  position: relative;
  background: none;
  padding: 50px;
  padding-bottom: 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 64em) {
    flex-direction: column-reverse;
  }
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

const OrangeText = styled.text`
  font-family: Amaranth;
  font-size: 32px;
  font-weight: 400;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 39px;
  color: #D8821B;
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

const OrangeBox = styled.div`
  margin-top: 98px;
  background-color: #D8821B;
  height: min-content;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 6px;
`;

const Button = styled.img`
  width: 56.5%;
  background: none;
  margin-bottom: 42px;
`;

const Buy = () => {
  return (
    <Section id="buy">      
        <TextBox>
            <Text>
              <OrangeText>We believe in fair distribution.</OrangeText> Buying a Horse Head costs <OrangeText>0.5 ETH.</OrangeText> There are no price tiers; HHC membership costs the same for everyone.
            </Text>
            <Text>
              Fifty horses are being withheld from the sale. These will be used for giveaways, future rewards and for the creators of HHC memberships.
            </Text>
        </TextBox>
        <OrangeBox>
          <Button src={find_your_horse_head}/>
          <Button src={opensea_button}/>
        </OrangeBox>
        <VerticalSeperator/>
    </Section>
  );
};

export default Buy;
