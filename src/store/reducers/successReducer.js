import actionTypes from "../actions/actionTypes";

/**
 * @function successReducer
 * @param  {Array} state - Array of guessed words
 * @param  {Object} action - Action to be reduced
 * @returns {boolean} - new success state
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;

    case actionTypes.RESET_DATA:
      return false;

    default:
      return state;
  }
};
