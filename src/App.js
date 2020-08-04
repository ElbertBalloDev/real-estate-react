import React from 'react';
import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { UserProvider } from './components/Context/UserContext';

const Wrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <UserProvider>
        <Home />
      </UserProvider>
    </Wrapper>
  );
}

export default App;
