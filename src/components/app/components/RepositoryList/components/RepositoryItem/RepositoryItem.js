import PropTypes from "prop-types";
import React from "react";

const RepositoryItem = ({ name, link }) => {
  return (
    <li>
      <a href={link} title="Repository link" target="_blank">
        {name}
      </a>
    </li>
  );
};

RepositoryItem.porpTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default RepositoryItem;
