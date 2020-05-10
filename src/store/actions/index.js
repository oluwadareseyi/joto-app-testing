import axios from "axios";

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
/**
 * @function getSecretWord
 * @returns {dispatch} - a diapatch function provided by Redux Thunk.
 */
export const getSecretWord = () => async (dispatch) => {
  const res = await axios.get("http://localhost:3030");
  dispatch({
    type: actionTypes.SET_SECRET_WORD,
    payload: res.data,
  });

  dispatch({
    type: actionTypes.RESET_DATA,
  });
};

export const giveUpAction = () => (dispatch) => {
  dispatch({
    type: actionTypes.GIVE_UP,
  });
};
