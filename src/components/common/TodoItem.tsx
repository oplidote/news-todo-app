import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { delete_todo, update_todo } from "../../actions";
import { AddTodoModal } from "../modal";
import { AiOutlineDelete } from "react-icons/ai";
interface propsTodoTypes {
  todo: todoTypes;
}
const TodoItem = (props: propsTodoTypes) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const { id, title, description, repeat, isComplete, createDate } = props.todo;
  const deleteTodo = () => {
    dispatch(delete_todo(id));
  };
  let weekend: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  const completeTodo = () => {
    const new_todo: todoTypes = {
      id: id,
      title: title,
      description: description,
      repeat: repeat,
      isComplete: !isComplete,
      createDate: createDate,
    };
    dispatch(update_todo(new_todo));
  };
  const repeat_JSX = () => {
    if (repeat.includes(1) && repeat.includes(0)) {
      return (
        <p className="repeat">
          {repeat.map((num: number, i: number) => {
            if (num == 1) return <span key={i}>{weekend[i]}</span>;
          })}
          요일마다
        </p>
      );
    } else if (repeat.includes(1)) return <p className="repeat">매일</p>;
    else return <p className="repeat">오늘만</p>;
  };

  return (
    <TodoItemLayout
      className={isComplete ? "complete" : ""}
      onClick={() => isComplete ? "" : setOpenModal(true)}
    >
      <div className="top">
        <input
          type="checkbox"
          onChange={completeTodo}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          checked={isComplete}
        ></input>
        <h2>{title}</h2>
        {repeat_JSX()}
      </div>
      <AiOutlineDelete
        size={24}
        color="#aaa"
        onClick={(e: React.MouseEvent) => {
          deleteTodo();
          e.stopPropagation();
        }}
      ></AiOutlineDelete>
      <p className="desc">{description ? description : "상세 내용 없음"}</p>

      {openModal && (
        <AddTodoModal
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          todo={props.todo}
          setOpenModal={setOpenModal}
        />
      )}
    </TodoItemLayout>
  );
};
const TodoItemLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 5%;
  border-radius: 10px;
  margin-bottom: 5%;
  cursor: pointer;
  &.complete {
    opacity: 0.5;
    h2 {
      text-decoration: line-through;
    }
  }
  .top {
    display: flex;
    align-items: center;
    h2 {
      margin-left: 10px;
      font-size: 1.1rem;
      font-weight: bold;
      flex-grow: 1;
    }
    .repeat {
      font-size: 0.8rem;
      color: #888;
      span + span {
        margin-left: 5px;
      }
    }
  }
  svg {
    position: absolute;
    display: block;
    bottom: 10px;
    right: 15px;
  }
  .desc {
    padding: 5%;
    color: #888;
    font-size: 0.8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
export default TodoItem;
