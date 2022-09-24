// Remains visible on all routes

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Avatar } from "@mui/material";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="menu-container">
        <MenuIcon />
          <YouTubeIcon className="youtube-logo" />
          <h2>FTTT</h2>
      </div>
      <div className="search-container">
        <input type="text" />
        <SearchIcon className="search-btn" />
      </div>
      <div className="user-container">
        <VideoCallIcon className="user-cont-icon" />
        <AppsIcon className="user-cont-icon" />
        <NotificationsIcon className="user-cont-icon" />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
