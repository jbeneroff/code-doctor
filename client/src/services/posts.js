import api from "./apiConfig";
// import jwtDecode from "jwt-decode";

export const getAllPosts = async () => {
  try {
    const res = await api.get("/posts");
    return user;
  } catch (e) {
    throw e;
  }
};

export const createPost = async (input) => {
  try {
    const res = await api.post("/posts", input);
    return user;
  } catch (e) {
    throw e;
  }
};