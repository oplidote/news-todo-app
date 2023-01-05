import React from "react";
import { useDispatch } from "react-redux";
import { delete_todo } from "../../actions";

const TodoItem = ({ todo }: any) => {
  const dispatch = useDispatch();

  const { id, title, isComplete } = todo;

  const handleClick = () => {
    dispatch(delete_todo(id));
  };

  return (
    <>
      <div>
        <h2>{title}</h2>
      </div>
      <button onClick={handleClick}>{isComplete || "X"}</button>
    </>
  );
};

export default TodoItem;
