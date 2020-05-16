import React from "react";
import { shallow } from "enzyme";
import Input, { UnconnectedInput } from "./Input";
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
  // set up a store with any state passed into it and every other state in the combined reducers.
  const store = storeFactory(initialState);
  // pass that store into the wrapper and dive two nests deep into the Input component itself.
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

describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const success = true;
    // pass success as true instead of the default false in the reducer
    const wrapper = setup({ success });
    // check the instance of the wrapper to get its props and then check the success prop.
    const successProp = wrapper.instance().props.success;

    // see if the prop is the same as the props we passed into the wrapper.
    expect(successProp).toBe(success);
  });

  test("guessWord action creator is a function prop", () => {
    const wrapper = setup();
    // we check the actions passed into the store when we mapped it to props.
    const guessWordProp = wrapper.instance().props.guessWord;
    // check if theres is a `guessWord` prop, and if it's a function.
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("guessWord action", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train";

  beforeEach(() => {
    // create a mock function for `guessWord` action
    guessWordMock = jest.fn();

    // create a shallow wrapper and pass the mock function as a prop
    wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);

    // add value to input box through state.
    wrapper.setState({ currentGuess: guessedWord });

    // simulate a button click.
    const button = wrapper.find("[data-test='submit-button']");
    button.simulate("click", { preventDefault() {} });
  });

  test("guessWord function gets called on button click", () => {
    // check if the function was called whan the button clicked virtually.
    const guessWordMockCount = guessWordMock.mock.calls.length;
    expect(guessWordMockCount).toBe(1);
  });

  test("calls `guessWord` with input value as argument", () => {
    // get the arguments passed into the `guessWord` mock function
    const guessedWordArg = guessWordMock.mock.calls[0][0];
    expect(guessedWordArg).toBe(guessedWord);
  });

  test("input is cleared on submit", () => {
    expect(wrapper.state("currentGuess")).toBe("");
  });
});
