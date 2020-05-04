import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import { checkElement } from "../test/testUtils";

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
  checkElement(wrapper, "component-congrats");
});

test("renders no element when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = wrapper.find("[test-data='component-congrats']");
  expect(component.text()).toBe("");
});

test("renders congratulatory text when success prop is true", () => {
  const wrapper = setup({ success: true });
  const component = wrapper.find("[test-data='congrats-message']");
  expect(component.text().length).not.toBe(0);
});
