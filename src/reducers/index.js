// Here state is the current state...it won't be undefined. But just in case it is...we will set it to an empty array...so the code won't break
// This is the Reducer: A Pure Function...always retuns a new state
// i.e. state = [] will be taken as the initial state if state is undefined by the store
export default function movies(state = [], action) {
  if (action.type === "ADD_MOVIES") {
    return action.movies;
  }

  return state;
}
