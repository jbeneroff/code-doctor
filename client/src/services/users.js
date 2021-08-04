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
    localStorage.removeItem("token")
    return true
  } catch (e) {
    throw e;
  }
};

export const verify = async () => {
  try {
    const token = localStorage.getItem('token')
    if (token) {
      const res = await api.get('/verify')
      return res.data
    } else {
      return false
    }
  } catch (e) {
    throw e;
  }
};

export const getUser = async (userId) => {
  try {
    const user = await api.get(`/users/${userId}`)
    return user
  } catch (e) {
    throw e;
  }
};

