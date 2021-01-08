import React, { useEffect, useState } from "react";
import Login from "./componets/Login";
import { getTokenFromUrl } from "./spotify";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./componets/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // fetch token in window url after hash location
    const hash = getTokenFromUrl();
    // the window location hash token is clear after geting in home page
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("user :", user);
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player /> : <Login />}

      {/* spotify login page */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
