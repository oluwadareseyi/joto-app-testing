import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions";

export class UnconnectedInput extends Component {
  state = {
    currentGuess: "",
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
        {this.props.success ||
        (!this.props.success && this.props.giveUp) ? null : (
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
            {this.props.guessedWords && this.props.guessedWords.length > 2 && (
              <button
                onClick={this.props.giveUpAction}
                data-test="concede-button"
                className="btn btn-danger ml-1"
                type="button"
              >
                Give Up.
              </button>
            )}
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, giveUp }) => {
  return { success, guessedWords, giveUp };
};

export default connect(mapStateToProps, actions)(UnconnectedInput);
