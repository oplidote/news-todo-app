import { ReactElement, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { delete_todo, update_todo } from "../../actions";
import { AddTodoModal } from "../modal";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

interface todoType {
  id: Number;
  title: String;
  description: String;
  repeat: Number[];
  isComplete: Boolean;
}
const TodoItem = ({ todo }: any) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const { id, title, description, repeat, isComplete, createDate } = todo;

  
  const deleteTodo = () => {
    dispatch(delete_todo(id));
  };
  let weekend: string[] = ["일","월", "화", "수", "목", "금", "토" ];
  const completeTodo = () => {
    const new_todo = {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      repeat: todo.repeat,
      isComplete: !todo.isComplete,
      createDate: createDate
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
    <TodoItemLayout className={isComplete ? "complete" : ""}>
      <div className="top">
        <input type="checkbox" onChange={completeTodo} checked={isComplete}></input>
        <h2>{title}</h2>
        {repeat_JSX()}
      </div>
      <div className="btn-box">
        <AiOutlineEdit
          size={24}
          color="#aaa"
          onClick={() => setOpenModal(true)}
        ></AiOutlineEdit>
        <AiOutlineDelete size={24} color="#aaa" onClick={deleteTodo}>
          삭제
        </AiOutlineDelete>
      </div>
      <p className="desc">{description ? description : "상세 내용 없음"}</p>

      {openModal && <AddTodoModal todo={todo} setOpenModal={setOpenModal} />}
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
  &.complete {
    opacity: .5;
    h2 {text-decoration: line-through};
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
  .btn-box {
    position: absolute;
    display: block;
    bottom: 4px;
    right: 8px;
    svg + svg {
      margin-left: 5px;
    }
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
