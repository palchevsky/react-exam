import { createStore, combineReducers, applyMiddleware } from "redux";
import { app, modal, header, form, content, slideForm } from "./reducers";
import stateData from "../initialState";

const logger = store => next => action => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const saver = store => next => action => {
  let result = next(action);
  localStorage["redux-store"] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = (initialState = stateData) =>
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({ app, modal, header, form, content, slideForm }),
    localStorage["redux-store5"]
      ? JSON.parse(localStorage["redux-store5"])
      : initialState
  );

export default storeFactory;
