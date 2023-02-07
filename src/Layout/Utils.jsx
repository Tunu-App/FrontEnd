import { getUser } from "../service/AuthService";
import axios from "axios";
import { getToken } from "../service/AuthService";

export function checkTime() {
  let date = new Date();
  let currTime = date.getHours();

  if (currTime > 20) {
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

export async function getSleepSoundsApiData() {
  // GET THE USER'S SESSION TOKEN FROM THE SESSION STORAGE AND USE
  const AUTHTOKEN = getToken();

  // MAKE A SIMPLE REQUEST TO GET THE USER'S DATA FROM THE API ENDPOINT ONCE THE PAGE LOADS
  const API =
    "https://api.tunu.io/v1/sound/sleep";

  return await axios({
    method: "get",
    url: API,
    headers: {
      Authorization: AUTHTOKEN,
    },
  }).then(
    (response) => {
      if (response.status == 200) {
        return response.data;
      } else {
        // setError(response.data.errors[0]);
        // console.log(response.data.data)
      }
    },
    (error) => {
      console.log(error);
    }
  );
}
export async function getMoodliftersApiData() {
  // GET THE USER'S SESSION TOKEN FROM THE SESSION STORAGE AND USE
  const AUTHTOKEN = getToken();

  // MAKE A SIMPLE REQUEST TO GET THE USER'S DATA FROM THE API ENDPOINT ONCE THE PAGE LOADS
  const API =
    "https://api.tunu.io/v1/sound/moodlifter";

  return await axios({
    method: "get",
    url: API,
    headers: {
      Authorization: AUTHTOKEN,
    },
  }).then(
    (response) => {
      if (response.status == 200) {
        return response.data;
      } else {
        // setError(response.data.errors[0]);
        // console.log(response.data.data)
      }
    },
    (error) => {
      console.log(error);
    }
  );
}
export async function getMeditateApiData() {
  // GET THE USER'S SESSION TOKEN FROM THE SESSION STORAGE AND USE
  const AUTHTOKEN = getToken();

  // MAKE A SIMPLE REQUEST TO GET THE USER'S DATA FROM THE API ENDPOINT ONCE THE PAGE LOADS
  const API =
    "https://api.tunu.io/v1/sound/meditation";

  return await axios({
    method: "get",
    url: API,
    headers: {
      Authorization: AUTHTOKEN,
    },
  }).then(
    (response) => {
      if (response.status == 200) {
        return response.data;
      } else {
        // setError(response.data.errors[0]);
        // console.log(response.data.data)
      }
    },
    (error) => {
      console.log(error);
    }
  );
}
