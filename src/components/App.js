import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount() {
    // fetch the data using api call & dispatch an action to the reducer(perform SIDE-effects)
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated");
      // try not to use this (this = App here)
      this.forceUpdate();
      console.log("state", this.props.store.getState());
    });
    // we are getting this data here from the data file
    store.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };

  render() {
    const { list } = this.props.store.getState();

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
