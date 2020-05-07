import actionTypes from "./actionTypes";
import { getLetterMatchCount } from "../../helpers";

/**
 * @function guessWord
 * @param {String} guessedWord - The guessed word.
 * @returns {Function} - returns Redux Thunk function that dispatches an action and gives us access to state using mmiddleware.
 */
export const guessWord = (guessedWord) => (dispatch, getState) => {
  const { secretWord } = getState();
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount },
  });

  guessedWord === secretWord &&
    dispatch({
      type: actionTypes.CORRECT_GUESS,
      payload: { guessedWord, letterMatchCount },
    });
};
