import styled from "styled-components";

// Lecture2.  Styled-Components 적용하기
const Lecture2 = () => {
  return (
    <div>
      <Container>
        <Button danger>Hello</Button>
        <Button>Hello</Button>
      </Container>
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

export default Lecture2;
