import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

export default class App extends Component {
  onSearchSubmit = async (term) => {
    const res = await youtube.get("search", {
      params: {
        q: term,
      },
    });
    console.log(res);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
