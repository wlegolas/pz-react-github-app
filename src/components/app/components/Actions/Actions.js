import PropTypes from "prop-types";
import React from "react";

const Actions = ({ onSeeRepositoriesClick, onSeeStarredsClick }) => {
  return (
    <div className="pz-actions">
      <button onClick={onSeeRepositoriesClick}>See repositories</button>
      <button onClick={onSeeStarredsClick}>See starreds</button>
    </div>
  );
};

Actions.propTypes = {
  onSeeRepositoriesClick: PropTypes.func.isRequired,
  onSeeStarredsClick: PropTypes.func.isRequired
};

export default Actions;
