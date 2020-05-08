import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { checkElement, storeFactory } from "../test/testUtils";

/**
 * @function setup
 * @param  {Object=} initialState
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<App store={store} />)
    .dive()
    .dive();
};

describe("app render", () => {
  test("renders app component without fail", () => {
    const wrapper = setup();
    checkElement(wrapper, "app-component");
  });
});

describe("Redux props", () => {
  test("app has success piece of state", () => {
    const success = false;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("app has access to secretWords", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test("app has access to guessedWords array", () => {
    const wrapper = setup();
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual([]);
  });
});
