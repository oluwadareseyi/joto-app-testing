import React from "react";

/**
 * Functional react component for congrtulatory message
 * @function Congrats
 * @param {object} props - React Props
 * @returns {JSX.Element} - Rendered Component
 */

const Congrats = (props) => {
  return props.success ? (
    <div test-data="component-congrats">
      <span test-data="congrats-message"></span>
    </div>
  ) : null;
};

export default Congrats;
