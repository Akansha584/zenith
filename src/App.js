import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav/Nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
