// Keep package imports on the top
import React, { createContext } from "react";
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

// createStore will internally call the reducer (movies) where it will get its initial state from the reducer args
// now we will pass this as props to app
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export const StoreContext = createContext();
class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

// value prop is a default prop...name cannot be changed
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
