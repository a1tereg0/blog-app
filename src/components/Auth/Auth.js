import React, { useState } from "react";
import classes from "./Auth.module.css";
import { connect } from "react-redux";
import { auth } from "../../actions/authActions";

const Auth = ({ onAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authHandler = (event) => {
    event.preventDefault();
    onAuth(email, password);
  };

  return (
    <div className={classes.Auth}>
      <h1>Login</h1>
      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={authHandler}>Submit</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(auth(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
