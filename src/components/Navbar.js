import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  align-items: center;
  background: rgba(196, 188, 188, 1);
  background-repeat: repeat-y;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
  width: 20%;
`;
const Link = styled.a`
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  font-family: 'Arial';
  font-size: 12.5px;
  font-weight: bold;
  line-height: 1.75;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in;

  &:hover {
    color: #000;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Link href="#Welcome">Welcome</Link>
      <Link href="#Mortgage-Calculator">Mortgage Calculator</Link>
      <Link href="#Team">Our Team</Link>
      <Link href="#Contact">Contact</Link>
    </Section>
  );
};

export default Navbar;
