import React from "react";
import "./App.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="list-item"
    >
      <img
        alt="video.snippet.title"
        className="thumbnail"
        src={video.snippet.thumbnails.high.url}
      />
      <span className="title"> {video.snippet.title}</span>
    </div>
  );
};

export default VideoItem;
