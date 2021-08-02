import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const res = await api.post("/sign-up", credentials);
    localStorage.setItem("token", res.data.token);
    let user = jwtDecode(res.data.token);
    return user;
  } catch (e) {
    throw e;
  }
};

export const signIn = async () => {
  try {

  } catch (e) {
    throw e;
  }
};

export const signOut = async () => {
  try {

  } catch (e) {
    throw e;
  }
};

export const verify = async () => {
  try {

  } catch (e) {
    throw e;
  }
};