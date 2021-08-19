import React, { useState } from "react";
import classes from "./Auth.module.css";
import { connect } from "react-redux";
import { auth } from "../../actions/authActions";
import Spinner from "../UI/Spinner";

const Auth = ({ onAuth, loading, hasErrors, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authHandler = (event) => {
    event.preventDefault();
    onAuth(email, password);
    history.replace("/");
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className={classes.Auth}>
      <h1>Login</h1>
      {hasErrors ? (
        <p style={{ color: "#de5499" }}>Invalid Email/Password</p>
      ) : null}
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

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    hasErrors: state.auth.hasErrors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(auth(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
