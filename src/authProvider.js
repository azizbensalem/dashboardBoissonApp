import decodeJwt from "jwt-decode";

export const authProvider = {
  // send username and password to the auth server and get back credentials
  login: ({ username, password }) => {
    const request = new Request("https://bottlear.herokuapp.com/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((token) => {
        const decodedToken = decodeJwt(token.data.accessToken);
        localStorage.setItem("token", JSON.stringify(token.data.accessToken));
        localStorage.setItem("permissions", decodedToken.role);
        return { redirectTo: false };
      })
      .catch(() => {
        throw new Error("Network error");
      });
  },
  // when the dataProvider returns an error, check if this is an authentication error
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  // when the user navigates, make sure that their credentials are still valid
  checkAuth: () =>
    localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),
  // ...
  // remove local credentials and notify the auth server that the user logged out
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    return Promise.resolve();
  }, // get the user's profile
  getIdentity: () => {
    try {
      const { id, fullName, avatar } = decodeJwt(localStorage.getItem("token"));
      return Promise.resolve({ id, fullName, avatar });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  // get the user permissions (optional)
  getPermissions: () => {
    const role = localStorage.getItem("permissions");
    return role ? Promise.resolve(role) : Promise.reject();
  },
};
