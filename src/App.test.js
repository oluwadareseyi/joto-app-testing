import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import { checkElement } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

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
