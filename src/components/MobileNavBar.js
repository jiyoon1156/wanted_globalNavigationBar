import React from 'react';
import styled from 'styled-components';
import NavList from './NavList';

const menuNames = ['홈', '탐색', '커리어 성장'];

const MobileNavBar = () => {
  return (
    <StyledNav>
      <StyledUl className="list">
        {menuNames.map((menu) => (
          <NavList key={menu} title={menu} />
        ))}
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 180px;
  height: 100%;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 100%;
  white-space: nowrap;
`;

export default MobileNavBar;
