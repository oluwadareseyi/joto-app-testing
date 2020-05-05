import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { checkElement, storeFactory } from "../test/testUtils";

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
    test("does not render component without errors", () => {});

    test("does not render input box", () => {});

    test("does not render submit button", () => {});
  });
});

describe("updateState", () => {});
