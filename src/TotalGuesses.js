import React from "react";

const totalGuesses = ({ length }) => {
  return length === 0 ? null : <div>Total Guesses: {length}</div>;
};

export default totalGuesses;
