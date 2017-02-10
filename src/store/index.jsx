import { loadState, saveState } from "./localStorage";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./../reducers/index";
import createLogger from "redux-logger";
import recipes from ".././data/recipes";
let state = {};
let savedState = loadState();
let initialState = {
  recipes,
  dialog: {
    dialogOpened: false,
    name: null
  }
};

if (savedState && savedState.recipes.length > 0) {
  state = loadState();
}
else {
  state = initialState;
}

let store = createStore(
  rootReducer,
  state,
  applyMiddleware(createLogger())
);

store.subscribe(() => {
  saveState({
    recipes: store.getState().recipes
  });
});

export default store;
