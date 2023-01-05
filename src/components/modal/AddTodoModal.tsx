// InputForm.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { add_todo } from "../../actions";
import { AiOutlineClose } from "react-icons/ai";

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
    if (title) {
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
      setRepeat([0, 0, 0, 0, 0, 0, 0]);
    } else {
      return;
    }
  };

  return (
    <AddTodoModalLayout>
      <div>
        <AiOutlineClose onClick={() => setOpenModal(false)} size={24} color="#555"/>
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
          추가
        </button>
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
    justify-content: space-around;
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
