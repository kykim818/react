import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../theme";

/**
 * Lecture 7 - nesting
 * SASS에서 사용하는 문법
 */

const GlobalStyle = createGlobalStyle`
 body{
   padding: 0;
   margin: 0;
 }
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${(props) => props.theme.successColor};
`;

const Card = styled.div`
  background-color: red;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #9c88ff;
  /* 컨테이너 안의 모든 카드들을 선택하고 싶다면 */
  /* nesting  */
  ${Card} {
    background-color: blue;
  }
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

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

export default Lecture6;
