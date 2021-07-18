import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavList = ({ link, title, onMouseEnter }) => (
  <StyledList onMouseEnter={onMouseEnter}>
    <StyledLink href={link}>{title}</StyledLink>
  </StyledList>
);

NavList.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
};

const StyledList = styled.li`
  height: 100%;
`;

const StyledLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1rem;
  font-weight: bold;

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
