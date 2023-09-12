import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: inline-block;
  width: 15vw;
  height: 7.13vh;
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  margin-top: -3.33vh;

  font-size:  min(2vw, 5vh);
  font-family: Abhaya Libre Medium;
  border-radius: 143px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
    background: none;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const Button = ({ text, onClick }) => {
  return (
    <Btn onClick={onClick}>
        {text}
    </Btn>
  );
};

export default Button;
