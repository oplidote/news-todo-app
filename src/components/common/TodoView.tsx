import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoView = () => {
  const todos = useSelector((state: any) => state.todos);
  return (
    <TodoViewLayout>
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      
    </TodoViewLayout>
  );
};

const TodoViewLayout = styled.div`
position: relative;
display: flex;
flex-direction: column;
`;
export default TodoView;
