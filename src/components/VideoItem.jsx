import React from "react";

export default function VideoItem({ video }) {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      {video.snippet.title}
    </div>
  );
}
