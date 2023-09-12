import styled from 'styled-components';


const Section = styled.section`
  position: relative;
  height: 1px;
  background: #705D71;
  margin: 100px 0px 99px -10vw;
  width: 100vw;
`;


const VerticalSeperator = () => {
  return (
    <Section id="vertical_seperator"/>
  );
};

export default VerticalSeperator;
