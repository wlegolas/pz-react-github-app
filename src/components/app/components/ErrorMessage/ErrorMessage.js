import PropTypes from "prop-types";
import React from "react";

const ErrorMessage = ({ error }) => {
  if (!error) {
    return null;
  }

  return <span className="pz-error-message">{error.message}</span>;
};

ErrorMessage.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired
  }).isRequired
};

export default ErrorMessage;
