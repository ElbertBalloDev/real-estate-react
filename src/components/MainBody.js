import React from 'react';
import styled from 'styled-components';
import Welcome from './Welcome';
import MortagageCalculator from './MortgageCalculator';
import Team from './Team';
import Contact from './Contact';

const Wrapper = styled.div`
  min-width: 80%;
  height: 1000px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const MainBody = () => {
  return (
    <Wrapper>
      <Welcome />
      <MortagageCalculator />
      <Team />
      <Contact />
    </Wrapper>
  );
};

export default MainBody;
