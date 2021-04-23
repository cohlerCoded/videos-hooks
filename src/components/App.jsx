import React, { useState, useEffect } from "react";
import randomWords from "random-words";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos(randomWords());

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}
