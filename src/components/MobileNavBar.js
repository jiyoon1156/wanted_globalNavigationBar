import React from 'react';
import styled from 'styled-components';

import NavList from './NavList';

const data = {
  menuNames: [
    {
      title: '홈',
      link: '',
    },
    {
      title: '탐색',
      link: '',
    },
    {
      title: '커리어 성장',
      link: '',
    },
  ],
};

const MobileNavBar = () => {
  return (
    <StyledNav>
      <StyledUl className="list">
        {data.menuNames.map((i) => (
          <NavList key={i.title} title={i.title} link={i.link} />
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
