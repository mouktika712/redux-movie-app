import React from "react";
import { addMovies, handleMovieSearch } from "../actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchResults: true,
      searchText: "",
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovies(movie));
    this.setState({
      showSearchResults: false,
    });
  };

  handleSearch = () => {
    const { searchText } = this.state;

    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={(e) => this.handleChange(e)} />
          <button id="search-btn">Search</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
