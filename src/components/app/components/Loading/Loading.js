import PropTypes from "prop-types";
import React from "react";

const Loading = ({ showLoading }) => {
  if (!showLoading) {
    return null;
  }

  return (
    <div className="pz-loading">
      Search the user info, please wait a moment...
    </div>
  );
};

Loading.propTypes = {
  showLoading: PropTypes.bool.isRequired
};

export default Loading;
