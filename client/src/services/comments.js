import api from "./apiConfig";

export const getAllComments = async (postId) => {
  try {
    const res = await api.get(`posts/${postId}`)
    return res.data
  } catch (e) {
    throw e;
  }
};

export const getComment = async (commentId) => {
  try {
    const res = await api.get(`/comments/${commentId}`)
    return res.data
  } catch (e) {
    throw e;
  }
};

export const createComment = async (postId, input) => {
  try {
    const res = await api.post(`/posts/${postId}/comments`, input)
    return res.data
  } catch (e) {
    throw e;
  }
};

export const updateComment = async (commentId) => {
  try {
    const res = await api.put(`/comments/${commentId}`)
    return res.data
  } catch (e) {
    throw e;
  }
};

export const deleteComment = async (postId, commentId) => {
  try {
    const res = await api.delete(`/posts/${postId}/comments/${commentId}`)
    return res.data
  } catch (e) {
    throw e;
  }
};