import React, { Component } from 'react';
import { connect } from "react-redux";
import NewRecipeForm from "./newRecipeForm";
import EditRecipeForm from "./editRecipeForm";

import { editRecipe, deleteRecipe, openDialog } from "./../actions";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipeIndex: "none"
    };
  };

  render() {

  let { recipes, dispatch, deleteRecipe, openDialog, dialog } = this.props;
  let dialogNewRecipe = "newRecipe";
  let dialogEditRecipe = "editRecipe";

    return (
      <div className="container">
        <h1>Recipes</h1>
        <hr/>
        <ul>
          {recipes.map((recipe, index) => {
            return (
              <li key={index} className="recipe">
                {this.state.recipeIndex !== index || this.state.recipeIndex === "none" || !dialog.dialogOpened?
                  <div>
                    <h3>{recipe.name}</h3>
                    <ul>
                      {recipe.ingredients.map((ingredient, index) => {
                        return (
                          <li key={index}>{ingredient}</li>
                        );
                      })}
                    </ul>

                    <div className="button-container">
                      <button
                        key={index}
                        className="btn btn-sm btn-default"
                        style={{marginRight: "10px"}}
                        onClick={(e) => {
                          openDialog(dialogEditRecipe);
                          this.setState({recipeIndex: index});
                        }}>
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={(e) => deleteRecipe(recipe.id)}>
                        Delete
                      </button>
                    </div>
                  </div> : null }

              {dialog.name === dialogEditRecipe && dialog.dialogOpened && this.state.recipeIndex === index ?
                <EditRecipeForm recipe={recipe} name={dialogEditRecipe}/>
                : null
              }

              </li>
            );
          })}
        </ul>
        <button
          className="btn btn-md btn-success"
          onClick={(e) => openDialog(dialogNewRecipe)}>
          Add New
        </button>

        {dialog.name === dialogNewRecipe && dialog.dialogOpened ? <NewRecipeForm name={dialogNewRecipe}/> : null}

      </div>
    );
  }
}

let mapStateToProps = (state) => {
  let { recipes, dialog } = state;
  return {
    recipes,
    dialog
  };
};

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteRecipe: (id) => dispatch(deleteRecipe(id)),
    openDialog: (name) => dispatch(openDialog(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
