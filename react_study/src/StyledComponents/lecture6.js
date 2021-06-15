import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../theme";

/**
 * Lecture 6 - Theming
 * 프로젝트의 전체 테마에 쓰이는 컬러들 설정을 어떻게 할것인가?
 * ThemeProvider의 사용
 */

const GlobalStyle = createGlobalStyle`
 body{
   padding: 0;
   margin: 0;
 }
`;

const Card = styled.div`
  background-color: red;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${(props) => props.theme.successColor};
`;

const Lecture6 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
};
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #9c88ff;
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

export default Lecture6;
