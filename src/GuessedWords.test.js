import React from "react";
import { shallow } from "enzyme";
import GuessedWords from "./GuessedWords";
import { checkElement, checkProps } from "../test/testUtils";

const defaultProps = {};

/**
 * @function setup
 * @param  {Object=} props
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("GuessedWords Component renders without any error", () => {
  const wrapper = setup();
});
