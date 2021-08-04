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

export const getUserPosts = async (userId) => {
  try {
    const res = await api.get(`/users/${userId}/posts`);
    return res.data
  } catch (e) {
    throw e;
  }
};

export const getPost = async (postId) => {
  try {
    const res = await api.get(`/posts/${postId}`);
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

export const updatePost = async (postId, input) => {
  try {
    const res = await api.put(`/posts/${postId}`, input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deletePost = async (postId) => {
  try {
    const res = await api.post(`/posts/${postId}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};