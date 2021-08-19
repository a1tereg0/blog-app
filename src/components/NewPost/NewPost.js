import axios from "../../axios";
import React, { useState } from "react";
import classes from "./NewPost.module.css";
import { connect } from "react-redux";

const NewPost = ({ history, token }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const postData = () => {
    const data = { title, body };
    axios.post("/posts.json?auth=" + token, data).then((response) => {
      console.log(response);
      history.replace("/");
    });
  };

  return (
    <div className={classes.NewPost}>
      <h1>Add a Post</h1>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label>Content</label>
      <textarea
        rows="16"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <button onClick={postData}>Add Post</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(NewPost);
