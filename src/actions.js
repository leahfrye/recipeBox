const ADD_RECIPE = "ADD_RECIPE";
const EDIT_RECIPE = "EDIT_RECIPE";
const DELETE_RECIPE = "DELETE_RECIPE";
const OPEN_DIALOG = "OPEN_DIALOG";
const CLOSE_DIALOG = "CLOSE_DIALOG";


export function addRecipe(name, ingredients) {
  return {
    type: ADD_RECIPE,
    name,
    ingredients
  }
};

export function editRecipe(name, ingredients, id) {
  return {
    type: EDIT_RECIPE,
    name,
    ingredients,
    id
  }
}

export function deleteRecipe(id) {
  return {
    type: DELETE_RECIPE,
    id
  };
};

export function openDialog(name, id) {
  return {
    type: OPEN_DIALOG,
    name,
    id
  };
};

export function closeDialog(name) {
  return {
    type: CLOSE_DIALOG,
    name
  };
};