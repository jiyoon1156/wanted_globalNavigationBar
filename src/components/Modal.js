import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import ModalList from './ModalList';
import Data from '../data/data.json';

const fetchData = (categories, cnt) => {
  const res = categories;
  res[cnt - 1].category = categories.filter((i, idx) => idx >= cnt - 1).map((i) => i.category);
  return res.slice(0, cnt);
};

const Modal = ({ isOpen, onMouseLeave }) => {
  const data = fetchData(cloneDeep(Data.ModalData), 6);
  return (
    <Wrapper isOpen={isOpen} onMouseLeave={onMouseLeave}>
      <Container>
        <CategoryWrap>
          {data.map((i) => (
            <ModalList category={i.category} subCategory={i.sub} />
          ))}
        </CategoryWrap>
      </Container>
    </Wrapper>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  padding: 5rem;
  background-color: #fff;
  box-shadow: 0 10rem 10rem #bdbdbd;
`;
const CategoryWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 106rem;
  margin: 0 auto;
`;

export default Modal;
