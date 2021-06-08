import styled, { createGlobalStyle, css, keyframes } from "styled-components";

/**
 * Lecture 4 - Animation
 *
 */
const GlobalStyle = createGlobalStyle`
 body{
   padding: 0;
   margin: 0;
 }
`;

const Lecture4 = () => {
  return (
    <div>
      <Container>
        <Button danger rotationTime={5}>
          Hello
        </Button>
        <Button>Hello</Button>
        <Anchor href="http://google.com">Go to google</Anchor>
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

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
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
  /* 특정 조건: props 를 사용하는 경우에는 css helper css 를 사용해야 한다.*/
  ${(props) => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}/*
  props를 사용하지 않는 경우에는 helper 없이 사용하면 된다.
  또한 css helper를 사용하는 경우에는 선언의 위치가 중요하지 않지만 
  사용하지 않는 경우에는 사용보다 선언이 먼저여야 한다.
  animation: ${rotation} 2s linear infinite;
   */
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default Lecture4;
