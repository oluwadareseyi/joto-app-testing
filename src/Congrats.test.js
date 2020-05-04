import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

const checkElement = (val) => {
  const wrapper = setup();
  const Component = wrapper.find(`[data-test="${val}"]`);
  expect(Component.length).toBe(1);
};

test("renders congrats component without fail", () => {
  checkElement("congrats-app");
});

test("renders no text when success prop is false", () => {});

test("renders congratulatory text when success prop is true", () => {});
