import React, { useEffect } from "react";
import { connect } from "react-redux";
import Post from "../Post/Post";
import Spinner from "../UI/Spinner";

import { fetchPosts } from "../../actions/postActions";

const Posts = ({ dispatch, loading, posts, hasErrors, history }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const postClickedHandler = (id) => {
    history.push({ pathname: `/${id}` });
  };

  const renderPosts = () => {
    if (loading) return <Spinner />;
    if (hasErrors) return <p>Something Went Wrong!</p>;
    return posts.map((post) => (
      <Post
        clicked={() => postClickedHandler(post.id)}
        key={post.id}
        post={post}
      />
    ));
  };

  return (
    <div>
      <section>
        <h1>Posts</h1>
        {renderPosts()}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps)(Posts);
