import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from "./actionTypes";

const uid = () => Math.random().toString(34).slice(2);

export function addRecipe(name, ingredients) {
  return {
    type: ADD_RECIPE,
    id: uid(),
    name,
    ingredients
  }
};

export function editRecipe(name, ingredients, id, index) {
  return {
    type: EDIT_RECIPE,
    name,
    ingredients,
    id,
    index
  }
}

export function deleteRecipe(id) {
  return {
    type: DELETE_RECIPE,
    id
  };
};
