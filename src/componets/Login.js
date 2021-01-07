import React from "react";
import SpotifyLogo from "../images/spotifyWhiteLogo.png";
import { loginUrl } from "../spotify";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <img className="spotify_logo" src={SpotifyLogo} alt="spotifyLog" />
      <div className="login_button">
        <a className="login_btn" href={loginUrl}>
          Login Spotify App
        </a>
      </div>

      {/* spotify login logo */}
      {/* spotify login button */}
    </div>
  );
}

export default Login;
