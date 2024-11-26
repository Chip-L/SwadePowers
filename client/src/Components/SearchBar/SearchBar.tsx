import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input placeholder="Enter a Power" />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
};
