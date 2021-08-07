import React from "react";
import classes from "./Post.module.css";

const Post = (props) => (
  <article onClick={props.clicked} className={classes.Post}>
    <h1>{props.post.title}</h1>
    <div className="Info">
      <div className="Author">Written By: Prashant</div>
    </div>
  </article>
);

export default Post;
