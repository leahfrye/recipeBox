import React, { Component } from 'react';
import { connect } from "react-redux";
import Recipes from "./recipes";
import NewRecipeForm from "./newRecipeForm";
import DeleteRecipeBox from "./deleteRecipeBox";

class App extends Component {

  render() {

  let { dispatch, deleteRecipe, openDialog, dialog } = this.props;
  let dialogNewRecipe = "newRecipe";
  let dialogEditRecipe = "editRecipe";
  let dialogDeleteRecipe = "deleteRecipe";

    return (
      <div>

        {dialog.name === dialogNewRecipe && dialog.dialogOpened ? <NewRecipeForm name={dialogNewRecipe}/> : null}
        {dialog.name === (dialogNewRecipe && dialog.dialogOpened) || (dialogDeleteRecipe && dialog.dialogOpened) ?
          <div className="overlay"></div> : null
        }
        {dialog.name === dialogDeleteRecipe && dialog.dialogOpened ? <DeleteRecipeBox name={dialogDeleteRecipe}/> : null}

        <Recipes dialogEditRecipe={dialogEditRecipe} dialogNewRecipe={dialogNewRecipe} dialogDeleteRecipe={dialogDeleteRecipe}/>

      </div>
    );
  }
}

let mapStateToProps = (state) => {
  let { dialog } = state;
  return {
    dialog
  };
};

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
