import styled from 'styled-components';
import Shoe from '../../assets/shoe.PNG';
import Signature from '../../assets/signature.PNG';


const SignatureLineContainer = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  margin-right: 200px;

  ${(props) => props.overwrite}

  @media (max-width: 64em) {
    margin-right: 8vw;
  }

  
  & > * {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const SignatureImg = styled.img`
  height: auto;
  width: 200px;
  
  @media (max-width: 456px) {
    width: calc(45vw - 4px);
  }
`;

const SignatureLine = ({overwrite=''}) => {
  return (
    <SignatureLineContainer id="SignatureLine" overwrite={overwrite}>
        <SignatureImg src={Signature} />
        <SignatureImg src={Shoe} />
    </SignatureLineContainer>
  );
};

export default SignatureLine;