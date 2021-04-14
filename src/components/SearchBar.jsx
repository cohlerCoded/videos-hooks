import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };
  onInputChange = () => {};
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui category search" action="" preventDefault>
          <label htmlFor="search">Search Videos: </label>
          <div class="ui icon input">
            <input
              class="prompt"
              type="search"
              name="search"
              id="search"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <i class="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}
