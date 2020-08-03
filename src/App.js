import React from 'react';
import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import { UserProvider } from './components/Hooks/UserContext';

const Wrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <UserProvider>
        <MainBody />
      </UserProvider>
    </Wrapper>
  );
}

export default App;
