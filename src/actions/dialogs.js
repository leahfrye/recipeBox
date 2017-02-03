import { OPEN_DIALOG, CLOSE_DIALOG } from "./actionTypes";

export function openDialog(name, id) {
  return {
    type: OPEN_DIALOG,
    name,
    id
  };
};

export function closeDialog(name, previousRecipeId) {
  return {
    type: CLOSE_DIALOG,
    name,
    previousRecipeId
  };
};
