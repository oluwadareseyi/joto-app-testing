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

describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("guessWord action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });

  test("guessWord function gets called on button click", () => {
    const guessWordMock = jest.fn();
    const wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);
    const button = wrapper.find("[data-test='submit-button']");
    button.simulate("click");
    const guessWordMockCount = guessWordMock.mock.calls.length;
    expect(guessWordMockCount).toBe(1);
  });
});
