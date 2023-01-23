// Keep package imports on the top
import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// File imports below
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

//CURRIED-form of: function logger(obj, next, action)
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log("ACTION_TYPE", action.type);
    }
    next(action);
  };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//     }
//     next(action);
//   };

// createStore will internally call the reducer (movies) where it will get its initial state from the reducer args
// now we will pass this as props to app
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <App store={store} />
  // </React.StrictMode>
);
