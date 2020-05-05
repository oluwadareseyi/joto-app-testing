import React, { Component } from "react";
import "./App.css";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

class App extends Component {
  render() {
    return (
      <div data-test="app-component" className="App">
        <h1>Jotto</h1>
        <Congrats success={false} />
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

export default App;
