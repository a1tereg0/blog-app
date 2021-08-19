import React from "react";
import { connect } from "react-redux";
import classes from "./FullPost.module.css";

const FullPost = ({ posts, match }) => {
  const post = posts.find((p) => p.id === match.params.id);
  console.log(post);
  return (
    <div className={classes.FullPost}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(FullPost);
