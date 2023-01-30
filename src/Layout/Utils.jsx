import { getUser } from "../service/AuthService";

export function checkTime() {
  let date = new Date();
  let currTime = date.getHours();

  if (currTime > 1) {
    return true;
  } else {
    return false;
  }
}

export function getUserName() {
  const user = getUser();
  const formattedName =
    user.firstName[0].toUpperCase() + user.firstName.slice(1);
  return formattedName;
}
