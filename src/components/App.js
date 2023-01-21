import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated");
      // try not to use this (this = store here)
      this.forceUpdate();
    });
    // make an api call over here (fetching the data: sideEffect : useEffect())
    // dispatch an action

    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });

    console.log("state", this.props.store.getState());
  }
  render() {
    const movies = this.props.store.getState();

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
