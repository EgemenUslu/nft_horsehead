import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BackgroundColorMap, ModalTextColorMap } from '../config';
import TraitCard from './TraitCard';


const ImgContainer = styled.div`
  width: 600px;
  height: 600px;
  background: inherit;

  img {
    width: auto;
    height: 100%;
  }   

  @media (max-width: 80em) {
    width: auto;
    height: 100%;
    max-height: 50vh;

    img {
      width: auto;
      height: 100%;
      max-height: 50vh;
    
    }   
  }
`;

const TraitsContainer = styled.div`
  background: transparent;

  max-height: 100%;
`;

const TraitCardsContainer = styled.div`
  background: transparent;

  @media (max-width: 80em) {
    width: 90vw;
  }
`;

const TraitCardsGrid = styled.div`
  background: transparent;
  display: grid; 
    
  grid-template-columns: 240px 240px;
  grid-template-rows: 64px 64px;
  column-gap: 16px;
  row-gap: 16px;

    
  @media (max-width: 80em) {
    grid-template-columns: auto;
    grid-template-rows: 64px;
  }
`;

const Name = styled.text`
  font-family: Amaranth;
  font-size: 36px;
  font-style: italic;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;

  background: transparent;
  margin-left: 8px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  height: 112px;

  background: transparent;
  position: relative;
  top: -16px;

  @media (max-width: 80em) {
    height: 80px;
    top: auto;
  }
`;

const Title = styled.text`
  font-family: Amaranth;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  background: transparent;
  margin-left: 24px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.6);
  z-index: 2;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 1200px;
  border-radius: 48px;
  position: absolute;
  background: ${props => props.color};
  z-index: 200;

  color: ${props => props.textColor};

  
  overflow-x: hidden;
  ::-webkit-scrollbar {display:none;}
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */

  @media (max-width: 80em) {
    width: 90vw;
    height: 50vh;
    max-height: 96vh;
    flex-direction: column;
    padding-top: 200px;

    
    @media (max-width: 48em) {
      height: 70vh;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 112px;

  background: transparent;

  @media (max-width: 80em) {
    width: 90vw;
    height: 32px;
    padding: 24px 0px 12px 0px;
  }
`;

const FooterText = styled.text`
  font-family: Ubuntu;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  background: transparent;
  right: 48px;
  bottom: 48px;
  position: absolute;

  
  @media (max-width: 80em) {
    margin-left: 0px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 32px;   
  right: 32px;
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: normal;
  color: inherit; 
  cursor: pointer;
  font-family: Ubuntu;

  &:focus {
    outline: none;
  }
`;



function useOutsideAlerter(ref, closeModal) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeModal();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const HorseCardModal = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.closeModal);

  console.log('horsecardmdal', props)

  return (
    <ModalContainer id="ModalContainer">
      <Modal 
        id="Modal"
        ref={wrapperRef} 
        color={BackgroundColorMap[props.data.attributes['1. Backgrounds'][0]]}
        textColor={ModalTextColorMap[props.data.attributes['1. Backgrounds'][0]]}
        >
        <CloseButton onClick={props.closeModal}>X</CloseButton>
        <ImgContainer>
        <img
            src={props.token_uri}
            alt=""
          />
        </ImgContainer>
        <TraitsContainer>
          <TitleContainer>
            <Title>META HORSE</Title>
            <Name>#{props.data.edition}</Name>
          </TitleContainer>
          <TraitCardsContainer>
            <TraitCardsGrid>
              {Object.keys(props.data.attributes).map((trait_name) =>(
                  <TraitCard
                    name={trait_name}
                    data={props.data.attributes[`${trait_name}`]}
                  />
              ))}                 
            </TraitCardsGrid>
          </TraitCardsContainer>

          <Footer>
            <FooterText>VIEW AT OPENSEA</FooterText>
          </Footer>
        </TraitsContainer>
      </Modal>
    </ModalContainer>
  );
};

export default HorseCardModal;
