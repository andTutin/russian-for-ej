import { createStore, compose, applyMiddleware } from "redux";
import { loading } from "./middlewares";
import { reducer } from "./reducer";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(loading),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
