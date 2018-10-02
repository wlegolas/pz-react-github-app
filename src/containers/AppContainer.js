import React, { Component } from "react";
import { AppContent } from "../components/app";
import { getUserInfo, getUserRepository } from "../services/gitService";

class AppContainer extends Component {
  state = {
    isLoading: false,
    userInfo: null,
    error: null,
    repos: [],
    starred: []
  };

  handleSearch = event => {
    const { target } = event;
    const userLogin = target.value;
    const keyCode = event.which || event.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      this.setState({ isLoading: true });

      getUserInfo(userLogin)
        .then(userInfo => this.updateStateAfterSearch({ userInfo }))
        .catch(error => this.updateStateAfterSearch({ error }));
    }
  };

  updateStateAfterSearch = newState => {
    this.setState({
      isLoading: false,
      repos: [],
      starred: [],
      ...newState
    });
  };

  handleShowRepositoryClick = repositoryType => {
    return () => {
      const userLogin = this.state.userInfo.login;

      getUserRepository(userLogin, repositoryType).then(repos =>
        this.setState({
          [repositoryType]: repos
        })
      );
    };
  };

  render() {
    return (
      <AppContent
        {...this.state}
        handleSearch={this.handleSearch}
        handleSeeRepositoriesClick={this.handleShowRepositoryClick("repos")}
        handleSeeStarredClick={this.handleShowRepositoryClick("starred")}
      />
    );
  }
}

export default AppContainer;
