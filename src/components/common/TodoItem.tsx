import { ReactElement, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { delete_todo } from "../../actions";
import { AddTodoModal } from "../modal";

const TodoItem = ({ todo }: any) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const { id, title, description, repeat, isComplete } = todo;

  const deleteTodo = () => {
    dispatch(delete_todo(id));
  };
  let weekend: string[] = ["월", "화", "수", "목", "금", "토", "일"];
  const completeTodo = () => {
    todo = {
      isComplete: !isComplete,
    };
  };
  const repeat_JSX: ReactElement = repeat.includes(0) ? (
    <p>
      {repeat.map((num: number, i: number) => {
        if (num == 1) return <span key={i}>{weekend[i]}</span>;
      })}
      요일마다 반복
    </p>
  ) : (
    <p>매일 반복</p>
  );

  return (
    <TodoItemLayout className={isComplete ? "com" : "not com"}>
      <button onClick={() => setOpenModal(true)}>수정</button>
      <input type="checkbox" onChange={completeTodo}></input>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="repeat">{repeat_JSX}</div>
      <button onClick={deleteTodo}>삭제</button>
      {openModal && <AddTodoModal todo={todo} setOpenModal={setOpenModal} />}
    </TodoItemLayout>
  );
};
const TodoItemLayout = styled.div`
  .repeat {
    font-size: 0.8rem;
    color: #888;
    span + span {
      margin-left: 5px;
    }
  }
`;
export default TodoItem;
