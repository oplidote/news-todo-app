import styled from "styled-components";
import TodayDate from "./TodayDate";
const Header = () => {
  return (
    <HeaderLayout>
      <h1>News TO-DO</h1>
      <TodayDate />
    </HeaderLayout>
  );
};
const HeaderLayout = styled.header`
  padding-top: 5%;
  text-align: center;
  h1 {
    display: inline-block;
    margin-bottom: 3%;
    font-weight: bold;
    font-size: 2rem;
  }
`;

export default Header;