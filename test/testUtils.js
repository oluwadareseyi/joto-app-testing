/**
 * @param {ShallowWrapper} wrapper - the component wrapper
 * @param {String} val - test attribute value
 * @returns {null} calls expect function on data attribute
 */
export const checkElement = (wrapper, val) => {
  const Component = wrapper.find(`[data-test="${val}"]`);
  expect(Component.length).toBe(1);
};
