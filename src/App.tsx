import React from "react";
import styled from "styled-components";
import { Header, Main } from "./components/common";
function App() {
  return (
    <div className="App">
      <AppLayout>
        <Container>
          <Header />
          <Main />
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
  min-height: 100vh;
  background-color: #eee;
`;
const Container = styled.div`
  padding: 0 3%;
`;

export default App;
