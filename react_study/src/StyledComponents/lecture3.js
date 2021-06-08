import styled, { createGlobalStyle } from "styled-components";

// Lecture3-1.  Margin 제거하기 - injectGlobal
// V4에서 injectGlobal 은 Deprecated 되었다.

// Lecture3-2. Extend 컴포넌트 재활용
// 버튼을 앵커나 링크로 활용하기

const GlobalStyle = createGlobalStyle`
 body{
   padding: 0;
   margin: 0;
 }
`;

const Lecture3 = () => {
  return (
    <div>
      <Container>
        <Button danger>Hello</Button>
        <Button>Hello</Button>
        <Anchor href="http://google.com">Go to google</Anchor>
      </Container>
      {/* 이부분에 적용 ,위치는 위 아래 상관이 없다.*/}
      <GlobalStyle />
    </div>
  );
};
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #9c88ff;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#3498db")};
`;
// 기존방식 V3 기준
// const Anchor = Button.withComponent("a").extend `
//   text-decoration: none;
// `;

// V4 기준에서의 사용방식
// Button 과 같은 css를 활용한다는게 의미가 있음
const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default Lecture3;
