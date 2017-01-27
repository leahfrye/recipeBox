import React, { Component } from 'react';
import { connect } from "react-redux";
import EditRecipeForm from "./editRecipeForm";

import { editRecipe, deleteRecipe } from "./../actions/changeRecipes";
import { openDialog } from "./../actions/dialogs";

class Recipes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      updating: false,
      selected: false,
      selectedIndex: -1,
    };
  };

  handleStyle(index, recipeId) {
    let { dialog, itemToChange } = this.props;

    let selectedStyle = {backgroundColor: "#ccc"};
    let transitionStyle = {opacity: "0", overflow: "hidden", transition: ".2s"};

    if (dialog.recipeId === recipeId && !this.state.updating && dialog.name === this.props.dialogDeleteRecipe) {
      return selectedStyle;
    }

    if (itemToChange && itemToChange.id === recipeId && this.state.updating) {
      return transitionStyle;
    }

    else {
      return this.state.selected ? {} : {cursor: "pointer"};
    }

  }

  handleVisibility(index) {
    this.setState({selectedIndex: index, selected: this.state.selected ? false : true});
  }

  handleVisibilityClass(index) {
    if ((this.state.selected && this.state.selectedIndex === index)) {
      return {display: "inline"};
    }
    else {
      return {display: "none"};
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let { itemToChange, dialog } = this.props;

    if (prevProps.itemToChange !== itemToChange && itemToChange.type === "delete" && dialog.name === "deleteRecipe") {
      this.setState({updating: true});
      setTimeout(() => {
        this.setState({updating: false});
        this.props.deleteRecipe(itemToChange.id);
        this.setState({selected: false});
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

    console.log(this.state.selectedIndex);


    let placeholderStyle = {
      backgroundColor: "blue"
    };

    return (
      <div>

        <div className="container">
          <h1>Recipes</h1>
          <hr/>
          <ul>

            {recipes.map((recipe, index) => {

              let selectedRecipeId = this.props.dialog.recipeId;
              return (

                <li
                  key={index}
                  className={this.state.selected ? "recipe" : "recipe hoverStyle"}
                  style={this.handleStyle(index, recipe.id)}
                  ref="recipe">

                  { selectedRecipeId !== recipe.id ||
                    dialog.name !== dialogEditRecipe ||
                    selectedRecipeId === undefined ||
                    !dialog.dialogOpened ?

                    <div>
                      <h3
                        onClick={(() => !dialog.dialogOpened ? this.handleVisibility(index) : null)}>
                        {recipe.name ? recipe.name : "Untitled"}
                        <div className="expand">{this.state.selected && this.state.selectedIndex === index ? "-" : "+"}</div>
                      </h3>

                        <div style={this.handleVisibilityClass(index)}>
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
