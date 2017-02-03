import { merge } from "lodash";
import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "./../actions/actionTypes";

let recipes = (state = {}, action) => {

  switch(action.type) {

    case "ADD_RECIPE": {
      let newState = Object.assign([], state);
      let ingredientsArray = action.ingredients.replace(/\s/g, '').split(",").filter((i) => {return i !== ""});
      newState.push({id: action.id, name: action.name, ingredients: ingredientsArray});
      return newState;
    }

    case "EDIT_RECIPE": {
      let newState = Object.assign([], state);
      let ingredientsArray = action.ingredients.replace(/\s/g, '').split(",").filter((i) => {return i !== ""});
      newState[action.index] = {name: action.name, ingredients: ingredientsArray, id: action.id};
      return newState;
    }

    case "DELETE_RECIPE": {
      let newState = Object.assign([], state);
      console.log(newState);
      // filter not working
      newState.filter((recipe) => {
        return recipe.id !== action.id
      });
      console.log(newState);
      return newState;
    }

    default:
      return state;
  }
};

export default recipes;
