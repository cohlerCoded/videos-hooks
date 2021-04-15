import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return "Loading...";
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
