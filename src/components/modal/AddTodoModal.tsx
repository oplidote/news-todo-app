// InputForm.js
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";
import { add_todo, increase, update_todo } from "../../actions";
import { AiOutlineClose } from "react-icons/ai";
type propsButtonTypes = {
  todo?:todoTypes;
  setOpenModal: (b:boolean) => void;
  onClick?: (e: React.MouseEvent) => void;
}
const AddTodoModal = ({ setOpenModal, todo }:propsButtonTypes) => {
  let today = new Date();
  const dispatch = useDispatch();
  const { id } = useSelector((state: any) => state.id);
  const [title, setTitle] = useState<string>(todo ? todo.title : "");
  const [text, setText] = useState<string>(todo ? todo.description : "");
  const [repeat, setRepeat] = useState<number[]>(
    todo ? todo.repeat : [0, 0, 0, 0, 0, 0, 0]
  );

  let weekend = ["일", "월", "화", "수", "목", "금", "토"];
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

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (title && !todo) {
      const todo: todoTypes = {
        id: id,
        title: title,
        description: text,
        repeat: repeat,
        isComplete: false,
        createDate: `${today.getFullYear()}-${
          today.getMonth() + 1
        }-${today.getDate()}`,
      };
      dispatch(increase(id));
      dispatch(add_todo(todo));
      setOpenModal(false);
    } else if (todo) {
      const new_todo = {
        id: todo.id,
        title: title,
        description: text,
        repeat: repeat,
        isComplete: false,
        createDate: todo.createDate,
      };
      setOpenModal(false);
      dispatch(update_todo(new_todo));
    } else if (!title) {
      alert("제목을 입력해주세요 !");
    }
  };

  return (
    <AddTodoModalLayout>
      <div>
        <AiOutlineClose
          onClick={(e: React.MouseEvent) => {
            setOpenModal(false);
            e.stopPropagation();
          }}
          size={24}
          color="#555"
        />
        <TitleArea>
          <span>제목</span>
          <input
            type="text"
            placeholder="제목 입력"
            onChange={titleChange}
            value={title}
          />
        </TitleArea>
        <DescriptionArea>
          <span>설명</span>
          <textarea
            placeholder="활동 정보를 상세히 입력해주세요."
            onChange={textChange}
            value={text}
          />
        </DescriptionArea>
        <RepeatArea>
          <span>반복</span>
          <RepeatBtnWrap>
            {weekend.map((day: any, i: number) => (
              <button
                key={i}
                className={repeat[i] == 1 ? "on" : ""}
                onClick={() => {
                  repeatChange(i);
                }}
              >
                {day}
              </button>
            ))}
          </RepeatBtnWrap>
        </RepeatArea>
        <button
          onClick={handleClick}
          style={{
            border: 0,
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#205cff",
            color: "#fff",
            width: "50%",
          }}
        >
          {todo ? "수정" : "추가"}
        </button>
      </div>
    </AddTodoModalLayout>
  );
};
const AddTodoModalLayout = styled.div`
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  z-index: 999;
  width: 100vw;
  max-width: 480px;
  height: 100vh;
  cursor: default;
  > div {
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    width: 80%;
    height: 400px;
    padding: 5% 7%;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    svg {
      position: absolute;
      padding: 0;
      top: 5%;
      right: 7%;
    }
  }
  span {
    margin-bottom: 10px;
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
const TitleArea = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  margin-top: 5%;
  input {
    padding: 10px 15px;
    border-radius: 10px;
    border: 2px solid #555;
  }
`;
const DescriptionArea = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  textarea {
    height: 80px;
    padding: 10px 15px;
    border-radius: 10px;
    border: 2px solid #555;
  }
`;
const RepeatArea = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
`;
const RepeatBtnWrap = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    padding: 2%;
    border: 0;
    margin: 0 3px;
    color: #888;
    &.on {
      color: #fff;
      background-color: #205cff;
    }
  }
`;
export default AddTodoModal;
