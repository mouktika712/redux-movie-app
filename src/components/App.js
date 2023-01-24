import React from "react";
import { connect } from "react-redux";
import { addMovies, showFavourites } from "../actions";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends React.Component {
  componentDidMount() {
    // fetch the data using api call & dispatch an action to the reducer(perform SIDE-effects)
    this.props.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.dispatch(showFavourites(val));
  };

  render() {
    const { movies} = this.props;
    const { favourites, list, showFavouritesTab } = movies;
    const displayList = showFavouritesTab ? favourites : list;

    return (
      <div className="App">
        <Navbar />
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
                dispatch={this.props.dispatch}
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

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

const mapStateToProps = (store) => ({
  // the part of store(store) needed by <App/>
    movies: store.movies,
    search: store.search,
})

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
