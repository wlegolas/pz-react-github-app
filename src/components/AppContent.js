import PropTypes from "prop-types";
import React from "react";
import Actions from "./Actions";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import RepositoryList from "./RepositoryList";
import Search from "./Search";
import UserInfo from "./UserInfo";

const AppContent = props => {
  const {
    isLoading,
    handleSearch,
    userInfo,
    repos,
    starred,
    handleSeeRepositoriesClick,
    handleSeeStarredClick,
    error
  } = props;

  return (
    <div className="pz-app">
      <Search handleSearch={handleSearch} />
      <Loading showLoading={isLoading} />
      <ErrorMessage error={error} />
      {userInfo && <UserInfo userInfo={userInfo} />}
      {userInfo && (
        <Actions
          onSeeRepositoriesClick={handleSeeRepositoriesClick}
          onSeeStarredsClick={handleSeeStarredClick}
        />
      )}
      {!!repos.length && (
        <RepositoryList
          className="pz-repos"
          title="Public repositories"
          repos={repos}
        />
      )}
      {!!starred.length && (
        <RepositoryList
          className="pz-starred"
          title="Starred repositories"
          repos={starred}
        />
      )}
    </div>
  );
};

AppContent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSeeRepositoriesClick: PropTypes.func.isRequired,
  handleSeeStarredClick: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  starred: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string.isRequired
};

export default AppContent;
