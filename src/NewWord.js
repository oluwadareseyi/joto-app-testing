import React from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions";

/**@function UnconnectedNewWord
 * @param  {Object} props - props passed down from Parent cmponent.
 * @returns {JSX.Element} - JSX Element.
 */
export const UnconnectedNewWord = (props) => {
  return (
    (props.success || (!props.success && props.giveUp === true)) && (
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
