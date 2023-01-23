import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { addMovies, showFavourites } from "../actions";
import { StoreContext } from "..";

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
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(showFavourites(val));
  };

  render() {
    const { movies, search } = this.props.store.getState();
    const { favourites, list, showFavouritesTab } = movies;
    const displayList = showFavouritesTab ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavouritesTab ? "" : "active-tabs"}`}
              onClick={() => {
                this.onChangeTab(false);
              }}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavouritesTab ? "active-tabs" : ""}`}
              onClick={() => {
                this.onChangeTab(true);
              }}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {displayList.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite}
              />
            ))}
          </div>

          {displayList.length === 0 ? (
            <div className="no-movies">No movies to display!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

class AppWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
    );
  }
}

export default AppWrapper;
