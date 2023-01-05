import React, { useState } from "react";
import styled from "styled-components";
import NewsView from "./NewsView";
import TodoView from "./TodoView";
import { AddTodoModal } from "../modal";

const Main = () => {
  const [openModal, setOpenModal] = useState<Boolean>(false);
  return (
    <MainLayout>
      <NewsView />
      <OpenModalButton onClick={() => setOpenModal(true)}>할 일 추가</OpenModalButton>
      {openModal && <AddTodoModal setOpenModal={setOpenModal}/>}
      <TodoView />
    </MainLayout>
  );
};

const MainLayout = styled.main`
  padding-top: 10%;
`;

const OpenModalButton = styled.button`

`;
export default Main;
