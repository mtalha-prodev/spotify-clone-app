import { Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./header.css";
import { useDataLayerValue } from "../contaxtApi/DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header_left">
        <SearchOutlined />
        <input
          type="text"
          placeholder="Search Playlist Or Your Favorite Song"
        />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="User" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
