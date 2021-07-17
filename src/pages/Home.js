import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MainLogo from '../components/MainLogo';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import NavAside from '../components/NavAside';
import MobileNavAside from '../components/MobileNavAside';
import theme from '../styles/theme';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shouldResize, setShouldResize] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      if (shouldResize) {
        setWindowWidth(window.innerWidth);
        setShouldResize(false);
        setTimeout(() => {
          setShouldResize(true);
        }, 500);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <StyledWrap>
      <StyledHeader>
        <Box>
          {windowWidth >= theme.breakpoint.mobile ? <MainLogo /> : null}
          {windowWidth >= theme.breakpoint.mobile ? <NavBar /> : <MobileNavBar />}
          {windowWidth >= theme.breakpoint.mobile ? <NavAside /> : <MobileNavAside />}
        </Box>
      </StyledHeader>
    </StyledWrap>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  padding: 0 50px;

  @media only screen and (max-width: ${theme.breakpoint.mobile}px) {
    padding: 0px 16px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1060px;
  width: 100%;
  height: 100%;
`;

const StyledWrap = styled.div`
  position: relative;
  height: 50px;
`;

export default Home;
