import { merge } from "lodash";

import {
  addRecipe,
  editRecipe,
  deleteRecipe,
  openDialog,
  closeDialog
} from "./../actions/changeRecipes";

let reducer = (state = [], action) => {

  switch(action.type) {

    case "SET_ITEM_TO_CHANGE": {
      let newState = Object.assign({}, state, state = {itemToChange: {type: action.typeOfChange, id: action.id}});
      return newState;
    }

    case "ADD_RECIPE": {
      let newState = merge({}, state);
      let ingredientsArray = action.ingredients.replace(/\s/g, '').split(",").filter((i) => {return i !== ""});
      newState.recipes.push({id: action.id, name: action.name, ingredients: ingredientsArray});
      return newState;
    }

    case "EDIT_RECIPE": {
      let newState = merge({}, state);
      let ingredientsArray = action.ingredients.replace(/\s/g, '').split(",").filter((i) => {return i !== ""});
      newState.recipes[action.index] = {name: action.name, ingredients: ingredientsArray, id: action.id};
      return newState;
    }

    case "DELETE_RECIPE": {
      let newState = Object.assign({}, state);
      newState.recipes = state.recipes.filter(recipe => recipe.id !== action.id);
      return newState;
    }

    case "OPEN_DIALOG": {
      let newState = Object.assign({}, state, state = {dialog: {name: action.name, dialogOpened: true, recipeId: action.id}});
      return newState;
    }

    case "CLOSE_DIALOG": {
      let newState = Object.assign({}, state, state = {dialog: {name: action.name, dialogOpened: false, previousRecipeId: action.previousRecipeId}});
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;