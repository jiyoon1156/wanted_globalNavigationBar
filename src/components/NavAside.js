import React from 'react';
import styled from 'styled-components';
import Search from '../assets/SearchIcon.svg';
import Bell from '../assets/BellIcon.svg';
import RoundedText from './RoundedText';

const NavAside = () => (
  <Container>
    <IconBox>
      <StyledIcon href="">
        <img src={Search} alt="검색" />
      </StyledIcon>
      <StyledIcon href="">
        <img src={Bell} alt="알림" />
      </StyledIcon>
      <StyledIcon href="">
        <ProfileContainer>
          <StyledProfile />
        </ProfileContainer>
      </StyledIcon>
      <TextBox href="">
        <RoundedText>기업서비스</RoundedText>
      </TextBox>
    </IconBox>
  </Container>
);
const IconBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const TextBox = styled.a`
  border-left: 0.1em solid #dfdfdf;
  padding-left: 16px;
`;

const StyledIcon = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20px;
`;

const StyledProfile = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #23e6b0;
`;

const ProfileContainer = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 70%;
  background: #bdbdbd;
  overflow: hidden;
`;

const Container = styled.aside`
  display: flex;
  align-items: center;
  width: 250px;
  margin-left: 16px;
`;

export default NavAside;
