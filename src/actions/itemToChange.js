import { SET_ITEM_TO_CHANGE } from "./actionTypes";

export function setItemToChange(typeOfChange, id) {
    return {
      type: SET_ITEM_TO_CHANGE,
      typeOfChange,
      id
    }
}
