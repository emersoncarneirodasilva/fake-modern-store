"use client";

import styled from "styled-components";

export const Navb = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 101px;
  padding: 0px 70px;
  box-shadow: 0px 6px 10px 3px rgba(0, 0, 0, 0.31),
    0px -6px 10px 3px rgba(255, 255, 255, 0.16);
  -webkit-box-shadow: 0px 6px 10px 3px rgba(0, 0, 0, 0.31),
    0px -6px 10px 3px rgba(255, 255, 255, 0.16);
  background-color: #0f52ba;

  @media (max-width: 500px) {
    padding: 0px 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  background-color: transparent;

  & h1 {
    font-weight: 600;
    color: #ffffff;
    background-color: transparent;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  gap: 15px;
  padding: 7px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  & p {
    font-weight: 700;
    color: #000000;
  }
`;
