import React, { Component } from 'react';
import { connect } from "react-redux";
import EditRecipeForm from "./editRecipeForm";

import { editRecipe, deleteRecipe, openDialog } from "./../actions";

class Recipes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipeIndex: "none"
    };
  };

  render() {

  let {
    recipes,
    dispatch,
    deleteRecipe,
    openDialog,
    dialog,
    dialogNewRecipe,
    dialogEditRecipe,
    dialogDeleteRecipe
  } = this.props;

    return (
      <div>

        <div className="container">
          <h1>Recipes</h1>
          <hr/>
          <ul>
            {recipes.map((recipe, index) => {
              return (
                <li key={index} className="recipe" style={index % 2 === 0 ? {marginRight: "30px"} : {marginRight: "0px"}}>
                  {this.state.recipeIndex !== index || this.state.recipeIndex === "none" || !dialog.dialogOpened ?
                    <div>
                      <h3>{recipe.name ? recipe.name : "Untitled"}</h3>
                        {recipe.ingredients.length !== 0 ?
                          <ul>
                            {recipe.ingredients.map((ingredient, index) => {
                              return (
                                <li key={index}>{"- " + ingredient}</li>
                              );
                            })}
                          </ul>
                          : <p>No ingredients yet</p>
                        }

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
                          onClick={(e) => openDialog(dialogDeleteRecipe)}>
                          Delete
                        </button>
                      </div>
                    </div> : null }

                {dialog.name === dialogEditRecipe && dialog.dialogOpened && this.state.recipeIndex === index ?
                  <EditRecipeForm recipe={recipe} dialogName={dialogEditRecipe}/>
                  : null
                }
                </li>

              );
            })}
          </ul>

        </div>

        <div className="container">
          <button
            className="btn btn-md btn-success"
            onClick={(e) => {
              openDialog(dialogNewRecipe);
              this.setState({recipeIndex: "none"});
            }}>
            Add New
          </button>
        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
