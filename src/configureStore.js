// in this file, we configue the store to use all our middlewares in setting up the store, then we export the store to index.js where it will be used as the store we pass into our provider.

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const middlewares = [thunk];

export default createStore(rootReducer, applyMiddleware(...middlewares));
