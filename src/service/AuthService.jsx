export function getUser() {
  const user = sessionStorage.getItem("user");
  if (user === "undefined" || !user) {
    return null;
  } else {
    return JSON.parse(user);
  }
}

export function getToken() {
  const token = sessionStorage.getItem("token");
  return token
}

export function setUserSession(user, token) {
  sessionStorage.setItem("user", JSON.stringify(user));
  sessionStorage.setItem("token", token);

  console.log(user,token)
}

export function resetUserSession() {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("token");
}
