import PropTypes from "prop-types";
import React from "react";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = ({ className, title, repos }) => (
  <div className="pz-repos">
    <h2>{title}</h2>
    <ul>
      {repos.map(repo => (
        <RepositoryItem key={repo.id} {...repo} />
      ))}
    </ul>
  </div>
);

RepositoryList.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default RepositoryList;
