const OPEN_DIALOG = "OPEN_DIALOG";
const CLOSE_DIALOG = "CLOSE_DIALOG";

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
