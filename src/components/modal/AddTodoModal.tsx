// InputForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../../actions";

const InputForm = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (e:any) => {
    const { value } = e.target;

    setText(value);
  };

  const handleClick = () => {
    const todo = {
      title: text,
      isComplete: false,
    };

    dispatch(add_todo(todo));
    setText("");
  };

  const handleKeyPress = (e:any) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력하세요!!"
        onChange={handleChange}
        value={text}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleClick}>추가 하기</button>
    </>
  );
};

export default InputForm;