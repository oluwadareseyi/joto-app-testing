import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions";
import "./App.css";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

class App extends Component {
  render() {
    return (
      <div data-test="app-component" className="container-sm">
        <h1>Jotto</h1>
        <Congrats success />
        <GuessedWords
          guessedWords={[
            { guessedWord: "train", letterMatchCount: 3 },
            { guessedWord: "agile", letterMatchCount: 1 },
            { guessedWord: "party", letterMatchCount: 5 },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, actions)(App);
