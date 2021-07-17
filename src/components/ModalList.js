/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Arrow from '../assets/ArrowIcon.svg';

const ModalList = ({ category, subCategory }) => {
  return (
    <Wrapper>
      {Array.isArray(category) ? (
        <CategoryWrap>
          {category.map((i) => (
            <Category key={i.title} href={i.link}>
              <CategoryTitle>{i.title}</CategoryTitle>
            </Category>
          ))}
        </CategoryWrap>
      ) : (
        <>
          <Category>
            <CategoryTitle>{category.title}</CategoryTitle>
          </Category>
          <SubCategoryWrap>
            {subCategory.map((i) => (
              <SubCategory key={i.title}>
                <SubCategoryLink href={i.link}>{i.title}</SubCategoryLink>
              </SubCategory>
            ))}
          </SubCategoryWrap>
        </>
      )}
    </Wrapper>
  );
};

ModalList.propTypes = {
  category: PropTypes.any,
  subCategory: PropTypes.array.isRequired,
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 15%;
`;
const CategoryWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.a`
  padding-bottom: 1.5rem;
  cursor: pointer;
`;
const CategoryTitle = styled.h3`
  position: relative;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.17;
  color: #000;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 1rem;
    height: 1rem;
    background: center / cover url(${Arrow}) no-repeat;
    transform: translateY(-50%);
  }
`;
const SubCategoryWrap = styled.ul``;
const SubCategory = styled.li`
  padding: 0.5rem 0;

  &:last-child > a::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 1rem;
    height: 1rem;
    background: center / cover url(${Arrow}) no-repeat;
    transform: translateY(-50%);
  }
`;
const SubCategoryLink = styled.a`
  position: relative;
  display: flex;
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.1;
  color: #bdbdbd;
`;

export default ModalList;
