import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ propvideos, proponVideoSelect }) => {
  const renderedList = propvideos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={proponVideoSelect}
        video={video}
      />
    );
  });
  return <div className="rendered-list">{renderedList}</div>;
};

export default VideoList;
