import { SET_ITEM_TO_CHANGE } from "./../actions/actionTypes";

let itemToChange = (state = [], action) => {

  switch(action.type) {

    case "SET_ITEM_TO_CHANGE": {
      let newState = Object.assign({}, state);
      newState = {type: action.typeOfChange, id: action.id};
      return newState;
    }

    default:
      return state;
  }
};

export default itemToChange;
