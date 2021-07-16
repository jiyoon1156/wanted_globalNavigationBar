import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/wantedLogo.svg';
import NavBar from '../components/NavBar';
import NavAside from '../components/NavAside';

const Home = () => (
  <StyledWrap>
    <StyledHeader>
      <Box>
        <a href="/">
          <StyledLogo src={Logo} />
        </a>
        <NavBar />
        <NavAside />
      </Box>
    </StyledHeader>
  </StyledWrap>
);

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  z-index: 100;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 106rem;
  width: 100%;
  height: 3rem;
  margin: 0 auto;
`;
const StyledLogo = styled.img`
  width: 80px;
  margin-right: 20px;
`;
const StyledWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 5rem;
`;

export default Home;
