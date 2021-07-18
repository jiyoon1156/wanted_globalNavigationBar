import React, { useState } from 'react';
import styled from 'styled-components';

import data from '../data/data.json';
import NavList from './NavList';
import Modal from './Modal';
import theme from '../styles/theme';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      <StyledUl className="list">
        {data.NavData.map((i) => (
          <NavList
            key={i.title}
            link={i.link}
            title={i.title}
            category={i.category}
            onMouseEnter={() => (i.title === '탐색' ? setIsOpen(true) : setIsOpen(false))}
          />
        ))}
      </StyledUl>
      <Modal className="modal" isOpen={isOpen} onMouseLeave={() => setIsOpen(false)} />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 60%;
  height: 100%;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 550px;
  height: 100%;
  white-space: nowrap;

  @media only screen and (max-width: ${theme.breakpoint.desktop}px) {
    width: auto;
  }
`;

export default NavBar;
