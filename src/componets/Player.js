import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import "./player.css";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="sidebar_player">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
