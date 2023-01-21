import { combineReducers } from "redux";
import {
  ADD_FAVOURITES,
  ADD_MOVIES,
  REMOVE_FROM_FAVOURITES,
  SHOW_FAVOURITES_TAB,
} from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavouritesTab: false,
};

/*Using default arguments: which will also be used as initial state by the store*/
export function movies(state = initialMoviesState, action) {
  // Creating a new state based on the action-data  and the action.type
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FROM_FAVOURITES:
      const fav = state.favourites.filter((movie) => {
        return movie !== action.movie;
      });
      return {
        ...state,
        favourites: fav,
      };
    case SHOW_FAVOURITES_TAB:
      return {
        ...state,
        showFavouritesTab: action.value,
      };
    default:
      return state;
  }
}

const initialSerachState = {
  result: {},
};
export function search(state = initialSerachState, action) {
  return state;
}

/*
// Manual method to combine the reducers
const initialRootState = {
  movies: initialMoviesState,
  search: initialSerachState,
};


export default function rootReducer(state = initialRootState, action) {
  return {
    movies: movies(state.movies, action),
    search: search(state.search, action),
  };
}
*/

// redux in-built function to combine the reducers (internally called the same way like above state.movies)
export default combineReducers({
  movies, //short-hand
  search,
});
