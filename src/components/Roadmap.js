import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VerticalSeperator from './sections/VerticalSeperator';


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

  display: flex;
  justify-content: space-between;

  @media (max-width: 64em) {
    flex-direction: column-reverse;
  }
`;
const Header = styled.div`
  font-family: Amaranth;
  font-size: 64px;
  font-style: italic;
  font-weight: 400;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: left;
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


const Roadmap = () => {


  return (
    <Section>
      <Container id="roadmap">      
        <TextBox>
          <Header>ROADMAP</Header>
          <Text>
              Welcome to MetaHorseSociety, a unique and exciting project where art, community, and technology intersect. We've put our heart and soul into creating this vibrant universe, and we can't wait for you to become a part of it.
          </Text>
          <Text>
              Our journey together will be driven by milestones. These key stages reflect our sell-through percentages and help us keep our focus sharp and our intentions clear. Upon reaching each milestone, we'll commence work on realizing the corresponding goal, amplifying the excitement and engagement of our journey.
          </Text>
          <Text>
              But we understand that a community thrives on shared benefits and rewards. That's why we have the 'MetaHorse Giveaways.' With every 10% of total sales achieved, we'll give away 100 Horses to 100 lucky Horseholders randomly chosen from our community. This isn't just a giveaway, it's our way of celebrating our shared achievements.
          </Text>
          <Text>
              What makes this even more thrilling is that your chances of winning a giveaway increase the sooner you become a Horseholder. Early adopters have a higher likelihood of winning these exclusive MetaHorseSociety NFTs. So, why wait? The early bird not only gets the worm but also stands a chance to win a horse!
          </Text>
          <Text>
              Remember, we're not just creating an NFT project; we're building a society, a community that appreciates art, values technology, and cherishes shared experiences. We invite you to be a part of this journey, to be a part of MetaHorseSociety.
          </Text>
      </TextBox>
      </Container>
      <VerticalSeperator/>
    </Section>
  );
};

export default Roadmap;
