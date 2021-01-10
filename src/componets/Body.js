import React from "react";
import Header from "./Header";
import "./body.css";
import bodyIfoImg from "../images/playlistImage.jpg";
import { useDataLayerValue } from "../contaxtApi/DataLayer";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  console.log("discover me : ", discover_weekly?.description);

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={discover_weekly?.images[0]?.url} alt="bodyIfoImg" />
        <div className="body_ingoText">
          <strong>Playlist</strong>
          <h4>descover weekly</h4>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
