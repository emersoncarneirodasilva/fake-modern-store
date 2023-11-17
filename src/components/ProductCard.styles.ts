"use client";

import styled from "styled-components";

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 218px;
  height: 285px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 172px;
  min-height: 158px;
  padding: 3px 6px;
  background-color: #ffffff;
`;

export const ProductNameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
  width: 100%;
  padding: 0 10px;
  margin: 0 10px;
  background-color: #ffffff;

  & p {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    background-color: #ffffff;
  }

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 26px;
    padding: 3px 6px;
    border-radius: 5px;
    background-color: #373737;
    color: #ffffff;
  }
`;

export const Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  margin: 0 10px;
  background-color: #ffffff;
`;

export const AddBuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  width: 100%;
  height: 31.91px;
  bottom: 0;
  border: none;
  border-radius: 0px 0px 8px 8px;
  background-color: #0f52ba;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1260d4;
  }

  & i {
    padding-top: 3px;
    scale: 1.2;
    color: #0f52ba;
    background-color: #0f52ba;
  }

  & p {
    color: #ffffff;
    background-color: transparent;
  }
`;

export const RemoveBuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  width: 100%;
  height: 31.91px;
  bottom: 0;
  border: none;
  border-radius: 0px 0px 8px 8px;
  background-color: #373737;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4d4c4c;
  }

  & i {
    padding-top: 3px;
    scale: 1.2;
    color: #373737;
    background-color: #373737;
  }

  & p {
    color: #ffffff;
    background-color: transparent;
  }
`;
