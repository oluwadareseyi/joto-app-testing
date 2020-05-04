import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import {checkElement} from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });
/**
 * @function setup
 * @param  {Object=} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders congrats component without fail", () => {
  const wrapper = setup();
  checkElement(wrapper, "congrats-app");
});

test("renders no text when success prop is false", () => {});

test("renders congratulatory text when success prop is true", () => {});
