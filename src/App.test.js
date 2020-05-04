import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { checkElement } from "../test/testUtils";

/**
 * @function setup
 * @param  {Object=} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test("renders app component without fail", () => {
  const wrapper = setup();
  checkElement(wrapper, "app-component");
});
