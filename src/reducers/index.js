import { ADD_FAVOURITES, ADD_MOVIES } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
};

/*Using default arguments: which will also be used as initial state by the store*/
export default function movies(state = initialMoviesState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies
  //   };
  // }

  // return state;

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
    default:
      return state;
  }
}
