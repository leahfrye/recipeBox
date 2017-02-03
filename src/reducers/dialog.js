import { OPEN_DIALOG, CLOSE_DIALOG } from "./../actions/actionTypes";

let dialog = (state = [], action) => {

  switch(action.type) {

    case "OPEN_DIALOG": {
      let newState = Object.assign({}, state);
      newState = {name: action.name, dialogOpened: true, recipeId: action.id};
      return newState;
    }

    case "CLOSE_DIALOG": {
      let newState = Object.assign({}, state);
      newState = {name: action.name, dialogOpened: false, previousRecipeId: action.previousRecipeId};
      return newState;
    }

    default:
      return state;
  }
};

export default dialog;
