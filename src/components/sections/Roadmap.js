import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RoadmapData } from '../../config';
import HorseCard from '../HorseCard';
import VerticalSeperator from './VerticalSeperator';


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

const MilestonesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MilestoneStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #D8821B;
  color: black;
  width: 280px;
  min-height: 88px;
  border-radius: 30px;
  margin: 0px 24px;
  margin-top: 56px;

  font-family: 'Amaranth';
  font-style: italic;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
`;

const MilestoneBigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const MilestoneContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  height: 88px;
  overflow: visible;
`;

const MilestoneLine = styled.div`
  height: 40px;
  width: 8px;
  background: #D8821B;
`;

const MilestonePercentage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #D8821B;
  color: black;
  min-width: 88px;
  min-height: 88px;
  border-radius: 88px;
  margin: 0px 24px;

  font-family: 'Amaranth';
  font-style: italic;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
`;

const MilestoneLeftText = styled.text`
  font-family: 'Amaranth';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: left;
  width: 25vw;
  z-index: 1;
`;

const MilestoneRightText = styled.text`
  font-family: 'Amaranth';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: right;
  width: 25vw;
  z-index: 1;
`;

const MilestoneEmptyText = styled.text`
  width: 25vw;
  z-index: -1;
`;

const Roadmap = () => {

  const Milestone = ({milestone}) => {
    return (
      <MilestoneBigContainer id={milestone.percentage}>
        <MilestoneLine/>
        <MilestoneContainer id={milestone.percentage}>
            {milestone.percentage/10%2?
              <MilestoneRightText>{milestone.description}</MilestoneRightText>
              :
              <MilestoneEmptyText></MilestoneEmptyText>
            }
            <MilestonePercentage>%{milestone.percentage}</MilestonePercentage>
            {milestone.percentage/10%2?
              <MilestoneEmptyText></MilestoneEmptyText>
              :
              <MilestoneLeftText>{milestone.description}</MilestoneLeftText>
            }
        </MilestoneContainer>       
      </MilestoneBigContainer>
    );
  }

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
      <MilestonesContainer id="milestones">
        <MilestoneStart>STARTING POINT</MilestoneStart>
        {RoadmapData.map((milestone) => (
         <Milestone
          milestone={milestone}
         />
        ))
        }
      </MilestonesContainer>
      <VerticalSeperator/>
    </Section>
  );
};

export default Roadmap;
