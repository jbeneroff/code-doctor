import api from "./apiConfig";
// import jwtDecode from "jwt-decode";

export const getAllPosts = async () => {
  try {
    const res = await api.get("/posts");
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const createPost = async (input) => {
  try {
    const res = await api.post("/posts", input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updatePost = async (id, input) => {
  try {
    const res = await api.put(`/posts/${id}`, input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deletePost = async (id) => {
  try {
    const res = await api.post(`/posts/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};