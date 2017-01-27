const SET_ITEM_TO_CHANGE = "SET_ITEM_TO_CHANGE";
const ADD_RECIPE = "ADD_RECIPE";
const EDIT_RECIPE = "EDIT_RECIPE";
const DELETE_RECIPE = "DELETE_RECIPE";

const uid = () => Math.random().toString(34).slice(2);

export function setItemToChange(typeOfChange, id) {
    return {
      type: SET_ITEM_TO_CHANGE,
      typeOfChange,
      id
    }
}

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
