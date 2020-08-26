import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Applications from "./components/Applications/Applications";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/applications" component={Applications} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
