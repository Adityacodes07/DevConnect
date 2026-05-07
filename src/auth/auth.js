let loggedIn = false;

export function isLoggedIn() {
  return loggedIn;
}

export function login() {
  loggedIn = true;
}

export function logout() {
  loggedIn = false;
}