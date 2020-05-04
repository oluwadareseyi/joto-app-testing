import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import checkPropTypes from "check-prop-types";
import { checkElement, checkProps } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };
/**
 * @function setup
 * @param  {Object=} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
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

test("does not throw warning with expected props", () => {
  const expectedProps = { success: true };
  checkProps(Congrats, expectedProps);
});