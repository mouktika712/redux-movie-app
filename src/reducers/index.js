import { ADD_FAVOURITES, ADD_MOVIES, REMOVE_FROM_FAVOURITES, SHOW_FAVOURITES_TAB } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavouritesTab: false,
};

/*Using default arguments: which will also be used as initial state by the store*/
export default function movies(state = initialMoviesState, action) {
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
