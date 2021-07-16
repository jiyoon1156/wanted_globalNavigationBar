import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoundedText = ({ children }) => <StyledRoundedText>{children}</StyledRoundedText>;

RoundedText.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledRoundedText = styled.span`
  display: flex;
  padding: 0.5rem;
  margin: 0 0.5rem;
  border: 1px solid #ddd;
  border-radius: 15px;
  color: gray;
  font-style: normal;
  font-weight: 500;
  font-size: 0.825rem;
  text-align: center;
`;

export default RoundedText;
