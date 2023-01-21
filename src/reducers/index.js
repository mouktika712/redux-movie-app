import { ADD_MOVIES } from "../actions";

/*Using default arguments: which will also be used as initial state by the store*/
export default function movies(state = [], action) {
  if (action.type === ADD_MOVIES) {
    return action.movies;
  }

  return state;
}
