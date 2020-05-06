/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/store/reducers";
import { middlewares } from "../src/configureStore";

/**
 * Create a testing store with imported reducers, state and middleware
 * globals: rootReducer, middlewares.
 * @function storeFactory
 * @param  {Object} initialState - Initial state for store
 * @returns {Store} Redux Store with middleware added
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

/**
 * @function checkElement
 * @param {ShallowWrapper} wrapper - the component wrapper
 * @param {String} val - test attribute value [data-test="value"]
 * @returns {assertion} calls the expect function on data attribute
 */
export const checkElement = (wrapper, val) => {
  const component = wrapper.find(`[data-test="${val}"]`);
  expect(component.length).toBe(1);
};

/**
 * @function checkElementDoesnt
 * @param {ShallowWrapper} wrapper - the component wrapper
 * @param {String} val - test attribute value [data-test="value"]
 * @returns {assertion} calls the expect function on data attribute
 */

export const checkElementDoesnt = (wrapper, val) => {
  const component = wrapper.find(`[data-test="${val}"]`);
  expect(component.length).toBe(0);
};

/**
 * @param  {React.Component} component - the component we're checking
 * @param  {Object} expectedProps - The props we expect to get with which we test.
 */
export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
