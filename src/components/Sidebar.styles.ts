"use client";

import styled from "styled-components";

export const SidebarContainer = styled.aside<{ active: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  top: 0;
  right: 0;
  right: ${(props) => (props.active ? "0" : "-100%")};
  width: 486px;
  height: 100%;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #0f52ba;
  z-index: 1;
  animation: showSidebar 0.4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }

    to {
      opacity: 1;
      width: 486px;
    }
  }

  @media (max-width: 555px) {
    width: 90%;
  }
`;

export const SectionBuyTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 50px;
  background-color: #0f52ba;

  & p {
    display: flex;
    flex-wrap: wrap;
    font-size: 27px;
    font-weight: 700;
    line-height: 32.91px;
    color: #ffffff;
    background-color: #0f52ba;
  }
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  line-height: 15px;
  width: 38px;
  height: 38px;
  padding-bottom: 3px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #000000;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 450px) {
    font-size: 20px;
    width: 34px;
    height: 26px;
  }

  &:hover {
    background-color: #262626;
  }
`;

export const MainSidebar = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 30px;
  padding: 10px 50px;
  width: 100%;
  height: 100%;
  background-color: #0f52ba;
`;

export const MiniCardProduct = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 379px;
  height: 95px;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 200px;
    height: 220.05px;
  }
`;

export const MiniImageProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductName = styled.p`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  width: 113px;
  height: 33px;
  background-color: #ffffff;
`;

export const QuantityAndPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #ffffff;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  background-color: #ffffff;
`;

export const Qtd = styled.p`
  font-size: 5px;
  font-weight: 400;
  line-height: 6.1px;
  background-color: #ffffff;
`;

export const QuantityButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 50px;
  height: 19px;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  background-color: #ffffff;
`;

export const DecrementButtons = styled.button`
  flex: 1;
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.63px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    scale: 1.1;
    color: red;
  }
`;

export const Quantity = styled.button`
  flex: 1;
  width: 100%;
  font-size: 8px;
  font-weight: 400;
  line-height: 9.75px;
  border: none;
  border-left: 0.3px solid #bfbfbf;
  border-right: 0.3px solid #bfbfbf;
  background-color: #ffffff;
`;

export const IncrementButtons = styled.button`
  flex: 1;
  width: 100%;
  font-size: 10px;
  font-weight: 400;
  line-height: 9.75px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    scale: 1.1;
    color: green;
  }
`;

export const ProductPrice = styled.div`
  width: 62px;
  height: 17px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  background-color: #ffffff;
`;

export const EmptyCartText = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 80px;
  color: #ffffff;
  background-color: #0f52ba;

  @media (max-width: 482px) {
    margin-top: 50px;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  top: -10px;
  right: -10px;
  padding: 4px 7px;
  border: none;
  border-radius: 50%;
  color: #ffffff;
  background-color: #000000;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #262626;
  }
`;

export const SectionPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #0f52ba;

  & p,
  span {
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    bottom: 0;
    padding: 50px;
    color: #ffffff;
    background-color: #0f52ba;
  }
`;

export const FinalizePurchase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  width: 100%;
  height: 97px;
  border: none;
  color: #ffffff;
  background-color: #000000;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #121212;
  }
`;
