import React from "react";
import "./App.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const date = video.snippet.publishTime;
  const returnDate = date.slice(0, 10);

  return (
    <div>
      <div className="ui embed">
        <iframe title="videoplayer" src={videoSrc} />
      </div>
      <div>
        <h3 className="video-title">{video.snippet.title}</h3>
        <h2>{video.snippet.channelTitle}</h2>
        <h4>Published on : {returnDate}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
