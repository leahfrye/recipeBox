import React, { Component } from 'react';
import { connect } from "react-redux";
import EditRecipeForm from "./editRecipeForm";

import { editRecipe, deleteRecipe, openDialog } from "./../actions";

class Recipes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      updating: false,
    };
  };

  handleStyle(index, recipeId) {
    let { dialog, itemToChange } = this.props;
    let isOdd = index % 2 === 0;

    let selectedStyle = {backgroundColor: "#ccc", marginRight: (isOdd ? "30px" : "0px")};
    let transitionStyle = {opacity: "0", overflow: "hidden", transition: ".2s", marginRight: (isOdd ? "30px" : "0px")};
    let defaultSyle = {marginRight: (isOdd ? "30px" : "0px")};

    if (dialog.recipeId === recipeId && !this.state.updating && dialog.name === this.props.dialogDeleteRecipe) {
      return selectedStyle;
    }

    if (itemToChange && itemToChange.id === recipeId && this.state.updating) {
      return transitionStyle;
    }

    else {
      return defaultSyle;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let { itemToChange, dialog } = this.props;

    if (prevProps.itemToChange !== itemToChange && itemToChange.type === "delete" && dialog.name === "deleteRecipe") {
      this.setState({updating: true});
      setTimeout(() => {
        this.setState({updating: false});
        this.props.deleteRecipe(itemToChange.id);
      }, 200);
    }

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

    let placeholderStyle = {
      backgroundColor: "blue"
    };
    console.log(this.state.updating)
    return (
      <div>

        <div className="container">
          <h1>Recipes</h1>
          <hr/>
          <ul>

            {recipes.map((recipe, index) => {
              let selectedRecipeId = this.props.dialog.recipeId;

              return (

                <li key={index} className="recipe" style={this.handleStyle(index, recipe.id)} ref="recipe">
                  { selectedRecipeId !== recipe.id ||
                    dialog.name !== dialogEditRecipe ||
                    selectedRecipeId === undefined ||
                    !dialog.dialogOpened ?

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
                            openDialog(dialogEditRecipe, recipe.id);
                          }}>
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={(e) => openDialog(dialogDeleteRecipe, recipe.id)}>
                          Delete
                        </button>
                      </div>
                    </div> : null }

                {dialog.name === dialogEditRecipe && dialog.dialogOpened && selectedRecipeId === recipe.id ?
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
            }}>
            Add New
          </button>
        </div>

      </div>
    );
  }
}

let mapStateToProps = (state) => {
  let { recipes, dialog, itemToChange } = state;
  return {
    recipes,
    dialog,
    itemToChange
  };
};

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteRecipe: (id) => dispatch(deleteRecipe(id)),
    openDialog: (name, recipeId) => dispatch(openDialog(name, recipeId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
