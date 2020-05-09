import actionTypes from "../actions/actionTypes";
/**
 * @function guessedWordsReducer
 * @param  {Object} action - Action to be reduced.
 * @param  {Array} state - Array of guessed words.
 * @returns {Array} - New guessedWords state.
 */
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];

    case actionTypes.RESET_DATA:
      return [];
    default:
      return state;
  }
};
