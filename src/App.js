import React, { Component } from 'react';
import './App.css';

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
class TopArtist extends Component {
  render() {
    var apiKey = "fca9515930a01d9ca28257e94bef596b";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=" + apiKey + "&format=json", false);
    xhttp.send();
    var topArtist = JSON.parse(xhttp.responseText);
    console.log(topArtist.artists.artist[0].name);
    var artist = [];
    for (var i = 0; i <= 20; i++) {
      artist.push(topArtist.artists.artist[i]);
    }
    console.log(artist);
    var showArtist = artist.map((artistDetails, i) =>
    <div key={"name_" + i}className="col-sm-4 artistDetails">
      <div id="name"><h2>{artistDetails.name}</h2></div>
      <div id='artistImage'><img id="img" src={artistDetails.image[3]['#text']} alt="Artist"/></div>
      <div key={i} id="circle">{artistDetails.i}</div>
    </div>
);
    return (
      <div>
      {showArtist}
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
          <TopArtist className="topArtistDetails" />
        </div>
      </div>
    );
  }
}

export default App;
