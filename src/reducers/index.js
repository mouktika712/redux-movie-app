import { ADD_MOVIES } from "../actions";

const initialMoviesState = {
  list: [],
  fovourites: [],
};

/*Using default arguments: which will also be used as initial state by the store*/
export default function movies(state = initialMoviesState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies
    };
  }

  return state;
}
