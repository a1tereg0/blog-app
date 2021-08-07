import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import FullPost from "./components/FullPost/FullPost";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/:id" component={FullPost} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
