import React, { useEffect, useState } from "react";
import Login from "./componets/Login";
import { getTokenFromUrl } from "./spotify";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./componets/Player";
import { useDataLayerValue } from "./contaxtApi/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // fetch token in window url after hash location
    const hash = getTokenFromUrl();
    // the window location hash token is clear after geting in home page
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);

  // console.log("user :", user);
  // console.log("token :", token);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}

      {/* spotify login page */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
