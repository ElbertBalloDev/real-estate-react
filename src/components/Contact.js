import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import road from '../assets/road-bg.png';

const ParallaxEffect = styled(Parallax)`
  width: '100%';
`;

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  color: white;
`;

const Contact = () => {
  return (
    <ParallaxEffect bgImage={road} strength={500}>
      <Wrapper id="Contact">
        <Header>Contact Us</Header>
      </Wrapper>
    </ParallaxEffect>
  );
};

export default Contact;
