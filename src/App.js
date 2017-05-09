import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var call = $.ajax({
      type: "GET",
      url: "https://api.spotify.com/v1/browse/featured-playlists",
      dataType: "JSON"
});
class NavBar extends Component {
  render() {
    return (
      <nav className="myNavBar">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    );
  }
}
class Test extends Component {
  render() {
    return (
      <div>
      <h1></h1>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div>
      <NavBar></NavBar>
      <div className="header"></div>
        <div className="container">
          <h1>Hello Worls</h1>
          <Test />
        </div>
      </div>
    );
  }
}

export default App;
