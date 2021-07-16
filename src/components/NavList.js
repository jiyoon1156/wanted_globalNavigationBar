import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavList = ({ link, isBeta, title }) => (
  <StyledList>
    <StyledLink href={link} isBeta={isBeta}>
      {title}
    </StyledLink>
  </StyledList>
);

NavList.propTypes = {
  link: PropTypes.string.isRequired,
  isBeta: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

const StyledList = styled.li`
  height: 100%;
`;

const StyledLink = styled.a.attrs(({ isBeta }) => ({
  isBeta: isBeta ? "'Beta'" : null,
}))`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: bold;

  &::after {
    content: ${({ isBeta }) => isBeta};
    position: absolute;
    top: 0.5rem;
    right: -0.1rem;
    font-size: 0.6rem;
    font-weight: 1px;
    color: #3a86f9;
  }

  &:hover::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #3a86f9;
  }
`;
export default NavList;
