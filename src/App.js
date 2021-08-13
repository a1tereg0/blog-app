import React from "react";
import { BrowserRouter } from "react-router-dom";
import Blog from "./components/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
  );
};

export default App;
