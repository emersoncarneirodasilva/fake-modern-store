"use client";

import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  min-height: 100vh;
  padding: 30px 15px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  column-gap: 20px;
  grid-row-gap: 30px;

  @media (max-width: 990px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const LoadingAndError = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  & .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;
  }

  & .pagination li {
    margin: 0 5px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #cccccc;
    cursor: pointer;
    user-select: none;

    &:hover {
      border-color: #007bff;
    }
  }

  & .pagination li.active {
    border-color: #007bff;
  }
`;
