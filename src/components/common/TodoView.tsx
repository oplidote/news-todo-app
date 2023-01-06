import React, { useState } from "react";
import { AddTodoModal } from "../modal";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoView = () => {
  const { todos } = useSelector((state: any) => state.todos);
  const [openModal, setOpenModal] = useState<Boolean>(false);
  let today = new Date();
  let day = today.getDay();

  return (
    <TodoViewLayout>
      <h2>
        <b>오늘의 할 일</b>을 확인해보세요
      </h2>
      {todos.map((todo: any) => (
        <>
          {todo.repeat.includes(1) ? (
            todo.repeat[day] == 1 && <TodoItem key={todo.id} todo={todo} />
          ) : todo.createDate ==
            `${today.getFullYear()}-${
              today.getMonth() + 1
            }-${today.getDate()}` ? (
            <TodoItem key={todo.id} todo={todo} />
          ) : (
            ""
          )}
        </>
      ))}

      <button className="add-btn" onClick={() => setOpenModal(true)}>
        할 일 추가
      </button>
      {openModal && <AddTodoModal setOpenModal={setOpenModal} />}
    </TodoViewLayout>
  );
};

const TodoViewLayout = styled.div`
  position: relative;
  margin-top: 5%;
  padding-bottom: 50px;
  > h2 {
    position: relative;
    margin-bottom: 5%;
    font-weight: bold;
    b {
      color: #205cff;
    }
  }
  .add-btn {
    position: fixed;
    left:50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 100%;
    height: 51px;
    border: 0;
    font-weight: 500;
    font-size: 1.2rem;
    color: #fff;
    background-color: #205cff;
    max-width: 480px;
  }
`;
export default TodoView;
