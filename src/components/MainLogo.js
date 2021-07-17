import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/wantedLogo.svg';

const MainLogo = () => {
  return (
    <a href="/">
      <StyledLogo src={Logo} />
    </a>
  );
};

const StyledLogo = styled.img`
  width: 80px;
`;

export default MainLogo;
