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
      .get("/posts.json")
      .then((response) => {
        const posts = [];
        for (const id in response.data) {
          posts.push({
            id: id,
            title: response.data[id].title,
            body: response.data[id].body,
          });
        }
        console.log(posts);
        dispatch(getPostsSuccess(posts));
      })
      .catch((error) => dispatch(getPostsFailure()));
  };
};
