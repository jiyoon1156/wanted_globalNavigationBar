import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../data/data.json';
import NavList from './NavList';
import Modal from './Modal';

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
            isBeta={i.isBeta}
            onMouseEnter={() => (i.title === '탐색' ? setIsOpen(true) : setIsOpen(false))}
          />
        ))}
        <Modal className="modal" isOpen={isOpen} onMouseLeave={() => setIsOpen(false)} />
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
`;

export default NavBar;
