import actionTypes from "../actions/actionTypes";
/**
 * @function secretWordReducer
 * @param  {String} state - State before reducer.
 * @param  {Object} action - Action sent to the reducer.
 * @returns {String} new state from action.
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;

    default:
      return state;
  }
};
