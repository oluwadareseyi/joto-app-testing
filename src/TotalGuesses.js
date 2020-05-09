import React from "react";

const totalGuesses = ({ guessedWords }) => {
  return (
    guessedWords.length > 0 && <div>Total Guesses: {guessedWords.length}</div>
  );
};

export default totalGuesses;
