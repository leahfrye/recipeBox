import React, { Component } from 'react';
import { connect } from "react-redux";
import { closeDialog } from "./../actions/dialogs";
import { addRecipe } from "./../actions/changeRecipes";

class NewRecipeForm extends Component {

  render() {
    let { closeDialog, addRecipe, name } = this.props;
    let ingredients;
    let recipeName;

    return (
      <div className="modal-dialog add-recipe-modal-dialog">
        <center>
          <div className="modal-content add-recipe-modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true" onClick={(e) => closeDialog(name)}>&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">
                Add New Recipe
              </h4>
            </div>

            <div className="modal-body">

              <form>

                <div className="form-group">
                  <label>Recipe Name</label>
                  <input className="form-control" placeholder="Name" ref={(node) => {recipeName = node}} />
                </div>

                <div className="form-group">
                  <label>Ingredients</label>
                  <textarea
                    className="form-control"
                    placeholder="Add Ingredients, seperated by commas"
                    ref={(node) => {ingredients = node}}/>
                </div>

                <button
                  className="btn btn-default"
                  onClick={(e) => {
                    addRecipe(recipeName.value, ingredients.value);
                    closeDialog(name);
                    e.preventDefault();
                  }}>Add</button>

              </form>

            </div>

          </div>
        </center>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
  };
};

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeDialog: (name) => dispatch(closeDialog(name)),
    addRecipe: (name, ingredients) => dispatch(addRecipe(name, ingredients)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipeForm);
