import styles from "../App.module.css";
import { Fragment } from "react";

// Lecture1.  기존의 CSS 파일 방식
const Lecture1 = () => {
  return (
    <div>
      <Fragment>
        <Button danger />
        <Button />
      </Fragment>
      <footer> --- </footer>
    </div>
  );
};

const Button = ({ danger }) => {
  return (
    <button
      className={
        danger
          ? `${styles.button} + ${styles.button} + --danger`
          : `${styles.button} + ${styles.button} + --success`
      }
    >
      Hello
    </button>
  );
};
export default Lecture1;
