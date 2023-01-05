// InputForm.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { add_todo } from "../../actions";
const AddTodoModal = ({ setOpenModal }: any) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [repeat, setRepeat] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
  let weekend = ["월", "화", "수", "목", "금", "토", "일"];
  let copy_arr: number[] = [...repeat];
  const titleChange = (e: any) => {
    const { value } = e.target;
    setTitle(value);
  };
  const textChange = (e: any) => {
    const { value } = e.target;
    setText(value);
  };
  const repeatChange = (i: number) => {
    if (copy_arr[i] == 1) {
      copy_arr[i] = 0;
    } else {
      copy_arr[i] = 1;
    }
    setRepeat(copy_arr);
  };

  const handleClick = () => {
    const todo = {
      title: title,
      description: text,
      repeat: repeat,
      isComplete: false,
    };
    dispatch(add_todo(todo));
    setTitle("");
    setText("");
    setOpenModal(false);
  };

  return (
    <AddTodoModalLayout>
      <div>
        <input
          type="text"
          placeholder="제목 입력"
          onChange={titleChange}
          value={title}
        />
        <input
          type="text"
          placeholder="활동 정보를 상세히 입력해주세요."
          onChange={textChange}
          value={text}
        />
        <div>
          {weekend.map((day: any, i: number) => (
            <button
              className={repeat[i] == 1 ? "on" : ""}
              onClick={() => {
                repeatChange(i);
              }}
            >
              {day}
            </button>
          ))}
        </div>
        <button onClick={handleClick}>추가</button>
      </div>
    </AddTodoModalLayout>
  );
};
const AddTodoModalLayout = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  > div {
    position: relative;
    display: flex;
    width: 90%;
    height: 500px;
    flex-direction: column;
    background-color: pink;
  }
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #555;
    opacity: 0.5;
    z-index: -1;
  }
`;
export default AddTodoModal;
