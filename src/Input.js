import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions";

class Input extends Component {
  render() {
    return (
      <div data-test="component-input">
        {this.props.success ? null : (
          <form className="form-inline">
            <input
              data-test="input-box"
              className="mb-2 mx-sm-3"
              type="text"
              placeholder="Enter guess"
            />
            <button
              data-test="submit-button"
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, actions)(Input);
