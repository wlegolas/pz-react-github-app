import PropTypes from "prop-types";
import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div className="pz-search">
      <input
        type="text"
        placeholder="Fill the GitHub user login here and press ENTER"
        onKeyUp={handleSearch}
      />
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Search;
