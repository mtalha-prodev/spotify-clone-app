import React from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import RepeatSharpIcon from "@material-ui/icons/RepeatSharp";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import VolumeUpSharpIcon from "@material-ui/icons/VolumeUpSharp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistImage from "../images/playlistImage.jpg";
import { Grid, Slider } from "@material-ui/core";
import { PlaylistAdd } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_album"
          src={PlaylistImage}
          alt="playlist logo image"
          srcset=""
        />
        <div className="footer_playlist">
          <h4>Programmer</h4>
          <p>Mern Stack</p>
        </div>
      </div>
      <div className="footer_center">
        <div className="footer_icons">
          <ShuffleIcon className="footer_green" />
          <SkipPreviousIcon className="footer_icon" />
          <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
          <SkipNextIcon className="footer_icon" />
          <RepeatSharpIcon className="footer_green" />
        </div>
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistAdd className="footer_icon" />
          </Grid>
          <Grid item>
            <VolumeUpSharpIcon className="footer_icon" />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
