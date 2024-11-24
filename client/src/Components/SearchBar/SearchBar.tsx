import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
/*  constructor() {

} */

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter a Power" />
        <button className="SearchButton">SEARCH</button>
      </div>
    )
  }
}
