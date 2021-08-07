import * as actionTypes from "./actionTypes";
import axios from "../axios";

export const getPosts = () => ({
  type: actionTypes.GET_POSTS,
});

export const getPostsSuccess = (posts) => ({
  type: actionTypes.GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = () => ({
  type: actionTypes.GET_POSTS_FAILURE,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(getPosts());
    axios
      .get("posts")
      .then((response) => dispatch(getPostsSuccess(response.data)))
      .catch((error) => dispatch(getPostsFailure()));
  };
};
