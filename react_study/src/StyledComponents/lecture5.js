import styled, { createGlobalStyle, css } from "styled-components";

/**
 * Lecture 5 - Attributes , Mixin
 *
 */
const GlobalStyle = createGlobalStyle`
 body{
   padding: 0;
   margin: 0;
 }
`;

// 내가 자주 사용하는 카드의 CSS 라고 가정
// mixin에 관한 개념 공부 필요
const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

// input의 attribute를 설정 가능
// props까지 만들 수 있음
// inline 속성 값보다 우선 순위를 가짐
const Input = styled.input.attrs({
  required: true,
  placeholder: "Test",
  color: "1",
})`
  border: none;
  ${awesomeCard}
  background-color: ${(props) => (props.color ? "red" : "blue")};
`;

const Lecture5 = () => {
  return (
    <div>
      <Container>
        <Input placeholder="hello" />
      </Container>
      <GlobalStyle />
    </div>
  );
};
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #9c88ff;
`;

export default Lecture5;
