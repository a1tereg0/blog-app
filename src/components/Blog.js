import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Blog.module.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import Auth from "../components/Auth/Auth";
import { connect } from "react-redux";

const Blog = ({ token }) => (
  <div className={classes.Blog}>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              activeClassName="home-active"
              activeStyle={{
                color: "#de5499",
                textDecoration: "underline",
              }}
              to="/"
            >
              Posts
            </NavLink>
          </li>
          {token !== null ? (
            <li>
              <NavLink
                to={{
                  pathname: "/new-post",
                }}
              >
                New Post
              </NavLink>
            </li>
          ) : null}
          {token === null ? (
            <li>
              <NavLink
                to={{
                  pathname: "/auth",
                }}
              >
                Login
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
    {token !== null ? (
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/new-post" component={NewPost} />
        <Route exact path="/:id" component={FullPost} />
        <Redirect to="/" />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/:id" component={FullPost} />
        <Redirect to="/" />
      </Switch>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(Blog);
