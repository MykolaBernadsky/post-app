import types from "../types";
import { cloneDeep } from 'lodash';

const initialState = {
  posts: [],
  activePost: {}
};

export default function postReducer (state = initialState, action) {
  const cloneState = cloneDeep(state);
  const { type, payload } = action

  switch (type) {
    case types.GET_ALL_POSTS:
      return { ...cloneState, posts: payload };
    case types.GET_POST:
      return {...cloneState, activePost: payload};
    case types.ADD_NEW_POST:
      return addNewPost(cloneState, payload);
    case types.ADD_NEW_COMMENT:
      return addNewComment(cloneState, payload);
    default:
      return state;
  }
};

const addNewComment = (state, payload) => {
  const {activePost} = state;
  const comment = { body: payload.comment, id: payload.id , postId: activePost.id}

  activePost.comments.push(comment)


  return state;
}


const addNewPost = (state, payload) => {
  state.posts.push(payload);

  return state;
}