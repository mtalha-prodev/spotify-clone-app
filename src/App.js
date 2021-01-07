import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./componets/Login";
import { getTokenFromUrl } from "./spotify";

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
    }
  }, []);

  return (
    <div className="App">
      {token ? <h1>Welcome to Login page</h1> : <Login />}

      {/* spotify login page */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
