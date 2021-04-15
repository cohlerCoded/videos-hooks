import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
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
    console.log(res);
    this.setState({ videos: res.data.items });
    console.log(this.state.videos);
  };
  onVideoSelect = (video) => {
    console.log("Form the onVideoSelect method", video);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />I have{" "}
        {this.state.videos.length} videos!
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
