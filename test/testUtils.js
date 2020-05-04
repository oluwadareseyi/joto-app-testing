import checkPropTypes from "check-prop-types";

/**
 * @param {ShallowWrapper} wrapper - the component wrapper
 * @param {String} val - test attribute value
 * @returns {null} calls expect function on data attribute
 */
export const checkElement = (wrapper, val) => {
  const Component = wrapper.find(`[test-data="${val}"]`);
  expect(Component.length).toBe(1);
};

/**
 * @param  {React.Component} component
 * @param  {Object} conforming
 */
export const checkProps = (component, conforming) => {
  const propError = checkPropTypes(
    component.propTypes,
    conforming,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
