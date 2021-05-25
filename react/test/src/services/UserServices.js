import axios from "axios";
import { API_DEFAULT } from "../constants";

export function loginAsync({ email, password }) {
  return axios.post(API_DEFAULT + "/user/login", { email, password });
}

export function signUpAsync({ email, password, name, birthday, gender }) {
  return axios.post(API_DEFAULT + "/user/signUp", {
    email,
    password,
    name,
    birthday,
    gender,
  });
}

export function sendData() {
  return axios.get(API_DEFAULT + "/user/test", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
}
