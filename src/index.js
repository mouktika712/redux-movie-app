// Keep package imports on the top
import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";

// File imports below
import "./index.css";
import App from "./components/App";
import movies from "./reducers";

// createStore will internally call the reducer (movies) where it will get its initial state from the reducer args
// now we will pass this as props to app
const store = createStore(movies);

// console.log("store", store);
// console.log("BEFORE STATE", store.getState());

// // Dispatching an "Action" to the reducer: store.dispatch(action obj)
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });

// console.log("AFTER STATE", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
