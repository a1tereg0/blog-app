import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Blog.module.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";
import FullPost from "./FullPost/FullPost";

const Blog = () => (
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
          <li>
            <NavLink
              to={{
                pathname: "/new-post",
              }}
            >
              New Post
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/:id" component={FullPost} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Blog;
