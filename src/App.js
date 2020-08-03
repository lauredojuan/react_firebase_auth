import React, { Component } from "react";
import "./App.css";
import fire from "./config/fire";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;

// https://www.youtube.com/watch?v=PZquB8XdU9k
