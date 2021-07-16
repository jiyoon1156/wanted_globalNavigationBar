import React from 'react';
import styled from 'styled-components';
import { cloneDeep } from 'lodash';
import ModalList from './ModalList';
import Data from '../data/data.json';

const getCategories = (categories, maxNum) => {
  const result = categories;
  result[maxNum - 1].category = categories.filter((item, idx) => idx >= maxNum - 1).map((item) => item.category);
  return result.slice(0, maxNum);
};

const Modal = () => {
  const categories = getCategories(cloneDeep(Data.ModalData), 6);
  return (
    <Wrapper>
      <Container>
        <CategoryWrap>
          {categories.map((item) => (
            <ModalList category={item.category} subCategory={item.sub} />
          ))}
        </CategoryWrap>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  .list li:first-child:hover ~ & {
    display: flex;
  }
  position: absolute;
  top: 2.7rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 50px);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000;
`;
const Container = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #fff;
`;
const CategoryWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 106rem;
  margin: 0 auto;
`;

export default Modal;
