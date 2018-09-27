const BASE_GIT_URL = "https://api.github.com/users";

function convertResponseToUserInfo(response) {
  return {
    login: response.login,
    avatarUrl: response.avatar_url,
    profileUrl: response.html_url,
    name: response.name,
    totalRepositories: response.public_repos,
    totalFollowers: response.followers,
    totalFollowing: response.following
  };
}

function convertResponseToRepositoryInfo(response) {
  return response.map(repository => ({
    id: repository.id,
    name: repository.name,
    link: repository.html_url
  }));
}

function get(url) {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(
      `The server returns the status code: ${response.statusText}`
    );
  });
}

export function getUserInfo(userLogin) {
  const internalUserLogin = userLogin ? `/${userLogin}` : "";
  const url = `${BASE_GIT_URL}${internalUserLogin}`;

  return get(url).then(convertResponseToUserInfo);
}

export function getUserRepository(userLogin, repositoryType) {
  const internalUserLogin = userLogin ? `/${userLogin}` : "";
  const internalRepositoryType = repositoryType ? `/${repositoryType}` : "";
  const url = `${BASE_GIT_URL}${internalUserLogin}${internalRepositoryType}`;

  return get(url).then(convertResponseToRepositoryInfo);
}
