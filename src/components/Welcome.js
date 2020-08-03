import React from 'react';
import styled from 'styled-components';
import house from '../assets/house-bg.jpg';
import { Parallax } from 'react-parallax';

const Header = styled.h1`
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  display: flex;
  font-family: 'Galada', cursive;
  font-size: 90px;
  justify-content: center;
  min-height: 1000px;
  text-shadow: 0px 4px 5px #000;
`;

const Welcome = () => {
  return (
    <Parallax bgImage={house} strength={500}>
      <Header id="Welcome">Elberts Real Estate Site</Header>
    </Parallax>
  );
};

export default Welcome;
