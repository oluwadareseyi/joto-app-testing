import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congrtulatory message
 * @function Congrats
 * @param {object} props - React Props
 * @returns {JSX.Element} - Rendered Component
 */

const Congrats = (props) => {
  return props.success ? (
    <div test-data="component-congrats">
      <span test-data="congrats-message">
        Congratulations!! You guessed the word!!
      </span>
    </div>
  ) : (
    <div test-data="component-congrats"></div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
