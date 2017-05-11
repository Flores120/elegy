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
class SearchTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.value}</h1>
        <h2>{this.handleSubmit.trackSearch}</h2>
      </div>
    );
  }
}
// <div key={i} id="circle"><img id="cirle-img" src={artistDetails.image[3]['#text']} alt="Artist"/></div>
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
    <div key={"name_" + i} className="col-sm-6 col-md-4 artistDetails">
      <a href={artistDetails.url} target="_blank">
        <div id='artistImage'><img id="img" src={artistDetails.image[3]['#text']} alt="Artist"/></div>
      </a>
      <div id="content">
        <div id="name">
          <h2>{artistDetails.name}</h2>
          <h3>Streams: {artistDetails.playcount}</h3>
        </div>
        <img id="cirle-img" src={artistDetails.image[3]['#text']} alt="Artist"/>
      </div>
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
      <div className="header">
      <SearchTrack />
      </div>
        <div className="container">
        <h1>Top Artist:</h1>
          <TopArtist className="topArtistDetails" />
        </div>
      </div>
    );
  }
}

export default App;
