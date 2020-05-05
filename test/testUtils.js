/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import rootReducer from "../src/store/reducers";

/**
 * Create a testing store with imported reducers, state and middleware
 * globals: rootReducer
 * @function storeFactory
 * @param  {Object} initialState - Initial state for store
 * @returns {Store} - Redux Store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

/**
 * @param {ShallowWrapper} wrapper - the component wrapper
 * @param {String} val - test attribute value
 * @returns {null} calls the expect function on data attribute
 */
export const checkElement = (wrapper, val) => {
  const Component = wrapper.find(`[data-test="${val}"]`);
  expect(Component.length).toBe(1);
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
