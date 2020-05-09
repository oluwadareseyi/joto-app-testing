import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions";

export class UnconnectedInput extends Component {
  state = {
    currentGuess: null,
  };

  submitGuessedWord(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    guessedWord && guessedWord.length > 0 && this.props.guessWord(guessedWord);
    this.setState({ currentGuess: "" });
  }
  render() {
    return (
      <div data-test="component-input">
        {this.props.success ? null : (
          <form className="form-inline">
            <input
              data-test="input-box"
              value={this.state.currentGuess}
              onChange={(e) => this.setState({ currentGuess: e.target.value })}
              className="mb-2 mx-sm-3"
              type="text"
              placeholder="Enter guess"
            />
            <button
              onClick={(e) => this.submitGuessedWord(e)}
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

export default connect(mapStateToProps, actions)(UnconnectedInput);
