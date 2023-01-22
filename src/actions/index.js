// Use variables instead of strings
// ACTION TYPES
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SHOW_FAVOURITES_TAB = "SHOW_FAVOURITES_TAB";

export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourites(movie) {
  return {
    type: ADD_FAVOURITES,
    movie,
  };
}

export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}

export function showFavourites(value) {
  return {
    type: SHOW_FAVOURITES_TAB,
    value,
  };
}

export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);

        // dispatch an action
        dispatch({type: 'ADD_SEARCH_RESULT', movie})
      });
  };
}
