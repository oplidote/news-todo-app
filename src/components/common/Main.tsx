
import styled from "styled-components";
import NewsView from "./NewsView";
import TodoView from "./TodoView";

const Main = () => {
  
  return (
    <MainLayout>
      <NewsView />
      
      <TodoView />
    </MainLayout>
  );
};

const MainLayout = styled.main`
  padding-top: 10%;
`;


export default Main;
