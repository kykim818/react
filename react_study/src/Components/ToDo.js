import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store/store";
import { Link } from "react-router-dom";
const fs = require("fs");

const ToDo = ({ text, onBtnClick, id }) => {
  const test = () => {
    fs.readFile();
  };
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  console.log("TODO-ownProps : ");
  console.log(ownProps);
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
