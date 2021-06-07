import "../App.css";
import { Fragment } from "react";

// Lecture1.  기존의 CSS 파일 방식
const Lecture1 = () => {
  return (
    <div>
      <Fragment>
        <Button danger />
        <Button />
      </Fragment>
    </div>
  );
};

const Button = ({ danger }) => {
  return (
    <button
      className={danger ? "button button--danger" : "button button--success"}
    >
      Hello
    </button>
  );
};
export default Lecture1;
