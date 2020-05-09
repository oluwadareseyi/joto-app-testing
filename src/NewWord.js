import React from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions";

export const UnconnectedNewWord = ({ success }) => {
  return (
    success && (
      <button
        onClick={this.props.getSecretWord}
        data-test="reset-button"
        className="btn btn-primary"
      >
        New Word
      </button>
    )
  );
};

export default connect(null, actions)(UnconnectedNewWord);
