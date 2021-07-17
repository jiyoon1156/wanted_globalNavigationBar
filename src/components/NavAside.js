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
    </IconBox>
    <TextBox href="">
      <RoundedText>기업서비스</RoundedText>
    </TextBox>
  </Container>
);
const IconBox = styled.div`
  display: flex;
  padding: 0 10px;
`;
const TextBox = styled.a`
  border-left: 0.1em solid #dfdfdf;
  padding: 0 10px;
`;
// const Wrapper = styled.div`
//   // position: relative;
//   display: flex;
//   // align-items: center;

//   &::after {
//     content: 'N';
//     // position: absolute;
//     top: -0.5rem;
//     right: -0.1rem;
//     font-size: 0.6rem;
//     font-weight: bold;
//     color: #3a86f9;
//   }
// `;
const StyledIcon = styled.a`
  width: 20px;
  padding: 0 10px;
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
`;

export default NavAside;
