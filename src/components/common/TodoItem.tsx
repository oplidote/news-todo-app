import React from "react";
import { useDispatch } from "react-redux";
import { delete_todo } from "../../actions";

const TodoItem = ({ todo }: any) => {
  const dispatch = useDispatch();
  
  const { id, title, description, repeat, isComplete } = todo;

  const handleClick = () => {
    dispatch(delete_todo(id));
  };

  return (
    <>
      <div>
        {isComplete ? 'com': "not com"}
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          {repeat}
        </div>
      </div>

      <button onClick={handleClick}>삭제</button>
    </>
  );
};

export default TodoItem;
