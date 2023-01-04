import React from "react";
import styled from "styled-components";
import { NewsView, TodayDate } from "./components/common";
function App() {
  return (
    <div className="App">
      <AppLayout>
        <Container>
          <header>
            <h1>News TO-DO</h1>
            <TodayDate />
          </header>
          <NewsView />
        </Container>
      </AppLayout>
    </div>
  );
}
const AppLayout = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  max-width: 480px;
  height: 100vh;
  background-color: #eee;
  header {
    padding-top: 5%;
    text-align: center;
    h1 {
      display: inline-block;
      margin-bottom: 3%;
      font-weight: bold;
      font-size: 2rem;
    }
  }
  
`;
const Container = styled.div`
  padding: 0 3%;
`;

export default App;
