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

export const signIn = async (credentials) => {
  try {
    const res = await api.post("/sign-in", credentials)
    localStorage.setItem("token", res.data.token);
    let user = jwtDecode(res.data.token);
    return user;
  } catch (e) {
    throw e;
  }
};

export const signOut = async () => {
  try {
    // is this needed??
  } catch (e) {
    throw e;
  }
};

export const verify = async () => {
  try {
    const token = localStorage.getItem('token')
    if (token) {
      const res = await api.get('/verify')
      console.log(res.data)
    } else {
      return false
    }
  } catch (e) {
    throw e;
  }
};

