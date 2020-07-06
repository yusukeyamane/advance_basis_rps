import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home";
import Rps from "./components/rps";

const Root = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/rps" component={Rps} />
    </div>
  </BrowserRouter>
);

export default Root;
