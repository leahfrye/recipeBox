import {
  addRecipe,
  editRecipe,
  deleteRecipe,
  openDialog,
  closeDialog
} from "./actions";

let reducer = (state, action) => {
  switch(action.type) {

    case "ADD_RECIPE":
      let newState0 = Object.assign({}, state);
      let ingredientsArray = action.ingredients.replace(/\s/g, '').split(",");
      newState0.recipes.push({id: newState0.recipes.length, name: action.name, ingredients: ingredientsArray});
      return newState0;

    case "DELETE_RECIPE":
      let newState = Object.assign({}, state);
      newState.recipes = state.recipes.filter(recipe => recipe.id !== action.id);
      return newState;

    case "OPEN_DIALOG":
      let nextState = Object.assign({}, state, state = {dialog: {name: action.name, dialogOpened: true}});
      return nextState;

      case "CLOSE_DIALOG":
        let nextState1 = Object.assign({}, state, state = {dialog: {name: action.name, dialogOpened: false}});
        return nextState1;

    default:
      return state;
  }
};

export default reducer;
