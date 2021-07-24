import {requestServices} from "../services";
import types from "../types";

const getPosts = () => async dispatch => {
  const res = await requestServices.postRequests.getAllPosts();

  dispatch({type: types.GET_ALL_POSTS, payload: res.data});
};

const getPostById = postId => async dispatch => {
  const res = await requestServices.postRequests.getPostById(postId);

  dispatch({type: types.GET_POST, payload: res.data});
};

const createPost = payload => async dispatch => {
  const res = await requestServices.postRequests.createPost(payload);

  dispatch({type: types.ADD_NEW_POST, payload: res.data});
}

const addComment = (payload) => async dispatch => {
  const res = await requestServices.postRequests.addComment(payload);

  dispatch({type: types.ADD_NEW_COMMENT, payload: res.data });
}

export { getPosts, getPostById, createPost, addComment };