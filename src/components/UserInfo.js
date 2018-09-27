import PropTypes from "prop-types";
import React from "react";

const UserInfo = ({ userInfo }) => {
  return (
    <div className="pz-user-container">
      <img src={userInfo.avatarUrl} alt="GitHub avatar" />
      <div className="pz-user-info">
        <h1>
          <a href={userInfo.profileUrl} title="GitHub profile link">
            {userInfo.name}
          </a>
        </h1>
        <ul className="pz-repos-info">
          <li>
            <label>Repository:</label> <i>{userInfo.totalRepositories}</i>
          </li>
          <li>
            <label>Followers:</label> <i>{userInfo.totalFollowers}</i>
          </li>
          <li>
            <label>Following:</label> <i>{userInfo.totalFollowing}</i>
          </li>
        </ul>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    totalRepositories: PropTypes.number.isRequired,
    totalFollowers: PropTypes.number.isRequired,
    totalFollowing: PropTypes.number.isRequired
  })
};

export default UserInfo;
