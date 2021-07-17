import React from 'react';
import styled from 'styled-components';
import Search from '../assets/SearchIcon.svg';
import Bell from '../assets/BellIcon.svg';
import Hamburger from '../assets/Hamburger.svg';

const MobileNavAside = () => (
  <Container>
    <IconBox>
      <StyledIcon href="">
        <img src={Search} alt="검색" />
      </StyledIcon>
      <StyledIcon href="">
        <img src={Bell} alt="알림" />
      </StyledIcon>
      <StyledIcon href="">
        <img src={Hamburger} alt="알림" />
      </StyledIcon>
    </IconBox>
  </Container>
);

const IconBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledIcon = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20px;
`;

const Container = styled.aside`
  display: flex;
  align-items: center;
  width: 124px;
  margin-left: 16px;
`;

export default MobileNavAside;
