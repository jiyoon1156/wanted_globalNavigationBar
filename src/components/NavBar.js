import React from 'react';
import styled from 'styled-components';
import data from '../data/data.json';
import NavList from './NavList';

const NavBar = () => (
  <StyledNav>
    <StyledUl>
      {data.NavData.map((i) => (
        <NavList key={i.title} link={i.link} title={i.title} category={i.category} isBeta={i.isBeta} />
      ))}
    </StyledUl>
  </StyledNav>
);

const StyledNav = styled.nav`
  height: 100%;
`;
const StyledUl = styled.ul`
  display: flex;
  height: 100%;
  white-space: nowrap;
`;

export default NavBar;
