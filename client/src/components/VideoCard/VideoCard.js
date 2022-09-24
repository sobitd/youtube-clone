import React from "react";
import Avatar from "@mui/material/Avatar";
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videocard">
      <img className="videocard-img" src={image} />
      <div className="videocard-info">
        <Avatar className="videocard-avatar" alt={channel} src={channelImage} />
        <div className="videocard-text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views • {timestamp}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
