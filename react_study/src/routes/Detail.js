import React from "react";
import { connect } from "react-redux";
// import { useParams } from "react-router-dom";

const Detail = ({ toDo }) => {
  //   const id = useParams();
  //   console.log(id);

  return (
    <>
      <h1>{toDo?.text} Detail</h1>
      <h1>Created at: {toDo?.id}</h1>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  //   return { toDos: state };
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}
export default connect(mapStateToProps)(Detail);
