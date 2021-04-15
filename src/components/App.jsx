import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

export default class App extends Component {
  state = { videos: [], selectedVideo: null };
  onSearchSubmit = async (term) => {
    const res = await youtube.get("search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
