import React from "react";

const GiveUp = ({ giveUp, secretWord }) => {
  return giveUp ? (
    <div data-test="component-congrats" className="alert alert-danger">
      <span data-test="congrats-message">
        The secret word was "{secretWord}"
      </span>
      <p data-test="congrats-message">Better Luck next time.</p>
    </div>
  ) : (
    <div></div>
  );
};

export default GiveUp;
