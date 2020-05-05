import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Input extends Component {
  render() {
    return (
      <div>
        <div></div>
      </div>
    );
  }
}

Input.propTypes = {};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Input);
