import React from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions";

export const UnconnectedNewWord = (props) => {
  return (
    props.success && (
      <button
        onClick={props.getSecretWord}
        data-test="reset-button"
        className="btn btn-primary"
      >
        New Word
      </button>
    )
  );
};

export default connect(null, actions)(UnconnectedNewWord);
