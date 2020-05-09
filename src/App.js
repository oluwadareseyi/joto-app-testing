import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions";
import "./App.css";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";
import TotalGuesses from "./TotalGuesses";

export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   */
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div data-test="app-component" className="container-sm">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Input />
        <Congrats success={this.props.success} />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <TotalGuesses guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, actions)(UnconnectedApp);
