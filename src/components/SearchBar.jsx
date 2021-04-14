import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    // TODO callback from parent
  };
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui category search" onSubmit={this.onFormSubmit}>
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
          <div>
            <button className="ui primary button">Search</button>
          </div>
        </form>
      </div>
    );
  }
}
