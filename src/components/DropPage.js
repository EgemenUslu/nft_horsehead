import React from 'react';
import styled from 'styled-components';
import ShowCase from './sections/ShowCase';
import HiAiBrain from '../assets/hi_ai_brain.png';
import Dao from '../assets/dao.png';
import Treasure from '../assets/treasure.png';
import Voting from '../assets/voting.png';
import HorseShoe from '../assets/horseShoePNG.GIF';

const Section = styled.section`
  position: relative;
  background: none;
  width: 100%;
`;

const DropPage = () => {
  return (
    <Section>
      {/* Introduction Section */}
      <ShowCase
        no={1}
        body={
          <p>
            The much-anticipated MetaHorse Society (MHS) NFT drop is on the horizon. Pioneering the confluence of human & AI collaboration, MHS offers a collection of 10,000 meticulously crafted horse head drawings, each radiating uniqueness with 8 distinct attributes.
          </p>
        }
        visual={HorseShoe}
      />
      
      {/* Drop Details Section */}
      <ShowCase
        no={2}
        body={
          <div>
            <h2>Drop Details</h2>
            <p>
              🔹 <strong>Date</strong>: September 22<br/>
              🔸 <strong>Groups A, C, D, E Minting</strong><br/>
              <strong>Total</strong>: 9,100 NFTs<br/>
              <strong>Cost</strong>: 0 ETH<br/>
              <strong>Exclusive</strong>: For our esteemed founders.<br/>
            </p>
          </div>
        }
        visual={Treasure}
      />

      {/* Group B Details */}
      <ShowCase
        no={3}
        body={
          <div>
            <h2>Group B Minting</h2>
            <p>
              🔹 <strong>Date</strong>: September 23<br/>
              🔸 <strong>Total</strong>: 900 NFTs<br/>
              <strong>Cost</strong>: 0.1 ETH<br/>
            </p>
          </div>
        }
        visual={HiAiBrain}
      />

      {/* Join the Vanguard Section */}
      <ShowCase
        no={4}
        body={
          <p>
            As we gallop towards the future, your involvement isn't merely a token acquisition but an allegiance to a revolution, a commitment to a world where human and AI not only coexist but collaboratively craft the future. MHS isn't just about ownership; it's a movement, a vision, a collaboration.
          </p>
        }
        visual={Dao}
      />

      {/* Closing Section */}
      <ShowCase
        no={5}
        body={
          <p>
            Stay ahead, mark the dates, and become part of an epoch-making journey where every stakeholder, be it human or AI, holds the reins of innovation.
          </p>
        }
        visual={Voting}
      />
    </Section>
  );
};

export default DropPage;
