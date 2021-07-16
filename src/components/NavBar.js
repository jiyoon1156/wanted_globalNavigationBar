import React from 'react';
import styled from 'styled-components';
import data from '../data/data.json';
import NavList from './NavList';
import Modal from './Modal';

const NavBar = () => {
  // 문제발생
  return (
    <StyledNav>
      <StyledUl className="list">
        {data.NavData.map((i) => (
          <NavList key={i.title} link={i.link} title={i.title} category={i.category} isBeta={i.isBeta} />
        ))}
        <Modal className="modal" />
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  height: 100%;
`;
const StyledUl = styled.ul`
  display: flex;
  height: 100%;
  white-space: nowrap;
  // li:first-child {
  //   color: red;
  // }
`;

export default NavBar;
