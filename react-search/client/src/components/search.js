import React from "react";


const SearchForm = props => (
  <form  className="container">
    <div className="form-group">
      <label for="userSearchTopic"><h1>Search Topic</h1></label>
      <input
        onChange={props.handleInputChange}
        name="query"
        type="text"
        className="form-control"
        id="userSearchTopic"
        placeholder="Articles"
        required
      />
    </div>
    <div className="form-group">
      <label for="userStartYear"><h1>Start Year</h1></label>
      <input
        onChange={props.handleInputChange}
        name="yearStart"
        type="number"
        className="form-control"
        min="1900"
        max="2099"
        step="1"
        placeholder="1995"
        required
      />
    </div>
    <div className="form-group">
      <label for="userEndYear"><h1>End Year</h1></label>
      <input
        onChange={props.handleInputChange}
        name="yearEnd"
        type="number"
        className="form-control"
        min="1900"
        max="2099"
        step="1"
        placeholder="2017"
        required
      />
    </div>
    <button
      className="btn btn-black"
      type="submit"
      onClick={props.testFunction}
    >
      Find
    </button>
  </form>
);

export default SearchForm;