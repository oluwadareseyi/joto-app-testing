import actionTypes from "../actions/actionTypes";
/**
 * @function giveUpReducer
 * @param  {Boolean} state=false A piece of state for the Application.
 * @param  {Object} action action to update the state
 * @returns
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.GIVE_UP:
      return true;

    case actionTypes.RESET_DATA:
      return false;

    default:
      return state;
  }
};
