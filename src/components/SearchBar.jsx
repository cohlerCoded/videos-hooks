import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label htmlFor="search">Search Videos: </label>
          <div className="ui icon input">
            <input
              className="prompt"
              type="search"
              name="search"
              id="search"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button className="ui primary button">
              <i className="search icon"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
