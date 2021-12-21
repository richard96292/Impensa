import React from "react";
import styled from "styled-components";
import NewExpense from "../NewExpenseModal/newExpense";
import theme from "../../theme/Index";
export const Icon = styled.i`
  padding: 6px;
  border-radius: 8px;
  margin-left: auto;
  cursor: pointer;
  transition: color 1s;
  :hover {
    background: rgba(197, 199, 197, 0.3);
  }
  :active {
    background: rgba(197, 199, 197, 0.7);
  }
`;
export const Dropout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.6);
`;

export const HeaderWrapper = styled.div`
  max-width: 100%;
  padding: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
`;

const Heading = styled.h3`
  color: ${theme.bg.secondary};
  margin: 0;
  font-size: 1.2em;
`;

export const ModalWrapper = styled.nav`
  transition: all 0.3s ease-out;
  background: white;
  z-index: 1133;
  width: 350px;
  height: fit-content;
  position: fixed;
`;

const NewExpenseModal = (props) => {
  return (
    <>
      <Dropout onClick={props.close} />
      <ModalWrapper>
        <HeaderWrapper>
          <Icon onClick={props.close} className="fas fa-times fa-xl" />
        </HeaderWrapper>
        <NewExpense />
      </ModalWrapper>
    </>
  );
};

export default NewExpenseModal;
