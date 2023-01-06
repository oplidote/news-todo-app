import React, { useState } from "react";
import { AddTodoModal } from "../modal";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoView = () => {
  const todos = useSelector((state: any) => state.todos);
  const [openModal, setOpenModal] = useState<Boolean>(false);
  return (
    <TodoViewLayout>
      <h2>
        <b>오늘의 할 일</b>을 확인해보세요
      </h2>

      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      <button onClick={() => setOpenModal(true)}>할 일 추가</button>
      {openModal && <AddTodoModal setOpenModal={setOpenModal} />}
    </TodoViewLayout>
  );
};

const TodoViewLayout = styled.div`
  position: relative;
  margin-top: 5%;
  h2 {
    position: relative;
    margin-bottom: 5%;
    font-weight: bold;
    b {
      color: #205cff;
    }
  }
`;
export default TodoView;
