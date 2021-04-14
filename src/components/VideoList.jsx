import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList({ videos }) {
  const renderedList = videos.map((video) => <VideoItem video={video} />);
  return <div>{renderedList}</div>;
}
