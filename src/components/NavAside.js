import React from 'react';
import styled from 'styled-components';
import Search from '../assets/SearchIcon.svg';
import Bell from '../assets/BellIcon.svg';
import Profile from '../assets/Profile.PNG';
import RoundedText from './RoundedText';

const NavAside = () => (
  <Container>
    <StyledIcon src={Search} alt="돋보기" />
    <Wrapper>
      <StyledIcon src={Bell} alt="벨" />
    </Wrapper>
    <Wrapper>
      <ProfileContainer>
        <StyledProfile src={Profile} alt="프로필" />
      </ProfileContainer>
    </Wrapper>
    <RoundedText>기업서비스</RoundedText>
  </Container>
);
const Wrapper = styled.div`
  display: flex;
  padding: 0 0.3rem;
  font-size: 1rem;
  font-weight: bold;

  &::after {
    content: 'N';
    font-size: 0.6rem;
    font-weight: 1px;
    color: #3a86f9;
  }
`;
const StyledIcon = styled.img`
  width: 20px;
`;

const StyledProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 70%;
  background: #bdbdbd;
  overflow: hidden;
`;

const Container = styled.aside`
  display: flex;
  padding: 15px;
`;

export default NavAside;
