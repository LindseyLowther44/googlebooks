import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../src/pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

import "./style.css";

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
