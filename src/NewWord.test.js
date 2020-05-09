import React from "react";
import { shallow } from "enzyme";
import { UnconnectedNewWord } from "./NewWord";

test("`getSecretWord` function gets called on button click", () => {
  const getSecretWordMock = jest.fn();
  const wrapper = shallow(
    <UnconnectedNewWord getSecretWord={getSecretWordMock} />
  );
});
