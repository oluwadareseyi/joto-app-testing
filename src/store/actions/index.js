import actionTypes from "./actionTypes";

/**
 * @function correctGuess
 * @returns {Object} - Action object with type 'CORRECT_GUESS'
 */
export const correctGuess = () => {
  return { type: actionTypes.CORRECT_GUESS };
};
