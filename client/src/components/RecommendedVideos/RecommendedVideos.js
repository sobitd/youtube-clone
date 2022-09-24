import React, { useEffect, useState } from "react";
import VideoCard from "./../VideoCard/VideoCard";
import axios from "axios";
import "./RecommendedVideos.css";
import { CircularProgress } from "@mui/material";
import Alert from "@mui/material";
import { DateTime } from "luxon";

function RecommendedVideos() {
  const [videoCards, setVideoCards] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=AIzaSyB7brirCOrzjROF-sB1NNJu2ZnebQNh_pw`
      )
      .then((res) => {
        setVideoCards(res.data.items);
        createVideoCards(res.data.items);
      })
      .catch((error) => {
        console.log(error);
        setisError(true);
      });
  }, []);

  async function createVideoCards(videoItems) {
    let newVideoCards = [];
    for (const video in videoItems) {
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.API_KEY}`
      );
      const channelImage = res.data.items[0].snippet.thumbnails.medium.url;

      const title = snippet.title;
      const image = snippet.thumbnails.medium.url;
      const views = video.statistics.viewCount;
      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channel = snippet.channelTitle;

      newVideoCards.push({
        videoId,
        image,
        title,
        channel,
        views,
        timestamp,
        channelImage,
      });
    }
    setVideoCards(newVideoCards);
    setisLoading(false);
  }
  

  return (
    <div className="recommendedvideos">
      {isLoading ? (
        <CircularProgress className="loading" color="secondary" />
      ) : null}
      <div className="recommendedvideos-videos">
        {videoCards.map((item) => {
          return (
            <VideoCard
              key={item.videoId}
              title={item.title}
              image={item.image}
              views={item.views}
              timestamp={item.timestamp}
              channelImage={item.channelImage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecommendedVideos;
