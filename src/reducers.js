import { merge } from "lodash";

import {
  addRecipe,
  editRecipe,
  deleteRecipe,
  openDialog,
  closeDialog
} from "./actions";

let reducer = (state, action) => {

  switch(action.type) {

    case "ADD_RECIPE": {
      let newState = merge({}, state);
      let ingredientsArray = action.ingredients.replace(/\s/g, '').split(",");
      newState.recipes.push({id: newState.recipes.length, name: action.name, ingredients: ingredientsArray});
      return newState;
    }

    case "EDIT_RECIPE": {
      let newState = merge({}, state);
      let ingredientsArray = action.ingredients.replace(/\s/g, '').split(",");
      newState.recipes[action.id] = {name: action.name, ingredients: ingredientsArray, id: action.id};
      return newState;
    }

    case "DELETE_RECIPE": {
      let newState = Object.assign({}, state);
      newState.recipes = state.recipes.filter(recipe => recipe.id !== action.id);
      return newState;
    }

    case "OPEN_DIALOG": {
      let newState = Object.assign({}, state, state = {dialog: {name: action.name, dialogOpened: true}});
      return newState;
    }

    case "CLOSE_DIALOG": {
      let newState = Object.assign({}, state, state = {dialog: {name: action.name, dialogOpened: false}});
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
