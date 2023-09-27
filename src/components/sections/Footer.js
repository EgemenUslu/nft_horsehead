import styled from 'styled-components';


const FooterContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${(props) => props.overwrite}

  @media (max-width: 84em) {
    
  }
`;

const FooterColumnItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterLineItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > * {
    margin-right: 4px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Text = styled.text`
  color: #FFF;
  text-align: center;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

const Link = styled.text`
  color: ${(props) => props.theme.goldenLinkColor};
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal; 

  cursor: pointer;

  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

const Footer = ({update_location, overwrite=''}) => {
  return (
    <FooterContainer id="Footer" overwrite={overwrite}>
        <FooterColumnItemContainer>
          <Text>© 2023 MetaHorse</Text>
          <FooterLineItemContainer>
            <Text>MHS</Text>
            <Link
              onClick={() => update_location('privacy_policy')}
            >Privacy Policy</Link>
            <Text>and MHS</Text>
            <Link
              onClick={() => update_location('terms_and_conditions')}
            >Terms & Conditions</Link>
          </FooterLineItemContainer>
        </FooterColumnItemContainer>
    </FooterContainer>
  );
};

export default Footer;