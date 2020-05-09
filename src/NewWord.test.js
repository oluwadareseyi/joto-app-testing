import React from "react";
import { shallow } from "enzyme";
import { UnconnectedNewWord } from "./NewWord";

test("`getSecretWord` function gets called on button click", () => {
  const getSecretWordMock = jest.fn();
  const props = {
    success: true,
    getSecretWord: getSecretWordMock,
  };
  const wrapper = shallow(<UnconnectedNewWord {...props} />);
  const button = wrapper.find("[data-test='reset-button']");
  button.simulate("click");
  const getSecretWordMockCall = getSecretWordMock.mock.calls.length;
  expect(getSecretWordMockCall).toBe(1);
});
