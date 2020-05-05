import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import {
  checkElement,
  storeFactory,
  checkElementDoesnt,
} from "../test/testUtils";

/**
 * @function setup
 * @param  {Object=} initialState
 * @returns {ShallowWrapper}
 */

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders component without errors", () => {
      checkElement(wrapper, "component-input");
    });

    test("renders input box", () => {
      checkElement(wrapper, "input-box");
    });

    test("renders submit button", () => {
      checkElement(wrapper, "submit-button");
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("render component without errors", () => {
      checkElement(wrapper, "component-input");
    });

    test("does not render input box", () => {
      checkElementDoesnt(wrapper, "input-box");
    });

    test("does not render submit button", () => {
      checkElementDoesnt(wrapper, "submit-button");
    });
  });
});

describe("updateState", () => {});
