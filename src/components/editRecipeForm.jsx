import React, { Component } from 'react';
import { connect } from "react-redux";
import { closeDialog, addRecipe } from "./../actions";

class EditRecipeForm extends Component {

  render() {
    let { closeDialog, addRecipe, recipe, name } = this.props;

    let ingredients;

    return (
      <div>
        <div className="modal-dialog edit-recipe-dialog">

              <form>
                <div className="form-group">
                  <label>Recipe Name</label>
                  <input className="form-control" ref={(node) => {name = node}} value={recipe.name} />

                </div>

                <div className="form-group">
                  <label>Ingredients</label>
                  <textarea className="form-control" ref={(node) => {ingredients = node}} value={recipe.ingredients}/>
                </div>

                <button
                  className="btn btn-success btn-sm"
                  style={{marginRight: "10px"}}
                  onClick={(e) => {
                    addRecipe(name.value, ingredients.value);
                    closeDialog(name);
                    e.preventDefault();
                  }}>Save</button>

                <button
                  className="btn btn-default btn-sm"
                  onClick={(e) => {
                    closeDialog(name);
                    e.preventDefault();
                  }}>Cancel</button>

              </form>


        </div>
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
    closeDialog: () => dispatch(closeDialog()),
    addRecipe: (name, ingredients) => dispatch(addRecipe(name, ingredients)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipeForm);
