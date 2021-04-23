import React, { useState } from "react";

export default function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onSubmit}>
        <label htmlFor="search">Search Videos: </label>
        <div className="ui icon input">
          <input
            className="prompt"
            type="search"
            name="search"
            id="search"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          <button className="ui primary button">
            <i className="search icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
