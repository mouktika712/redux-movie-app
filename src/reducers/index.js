import { combineReducers } from "redux";
import {
  ADD_FAVOURITES,
  ADD_MOVIES,
  ADD_SEARCH_RESULT,
  REMOVE_FROM_FAVOURITES,
  SHOW_FAVOURITES_TAB,
  ADD_MOVIE_TO_LIST,
} from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavouritesTab: false,
};

/*Using default arguments: which will also be used as initial state by the store*/
export function moviesReducer(state = initialMoviesState, action) {
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

    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}

const initialSerachState = {
  result: {},
  showSearchResults: false,
};
export function searchReducer(state = initialSerachState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
      case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false
      };

    default:
      return state;
  }
}

// redux in-built function to combine the reducers (internally called the same way like above state.movies)
export default combineReducers({
  movies: moviesReducer, //you can use short-hand if names are same
  search: searchReducer,
});
