import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store/store";
import ToDo from "../Components/ToDo";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    console.log(text);
    setText("");
    const test = [1];
    console.log(test[0]);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      {/* <ul>{JSON.stringify(toDos)}</ul> */}
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

// store로부터 state를 가져다 줄것
// function getCurrentState(state, ownProps) {
function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  // console.log(dispatch);
  // return { dispatch };
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
