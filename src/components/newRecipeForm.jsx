import React, { Component } from 'react';
import { connect } from "react-redux";
import { closeDialog, addRecipe } from "./../actions";

class NewRecipeForm extends Component {

  render() {
    let { closeDialog, addRecipe, name } = this.props;
    let ingredients;

    return (
      <div>
        <div className="modal-dialog">
          <div className="modal-content">
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
                  <input className="form-control" placeholder="Name" ref={(node) => {name = node}} />
                </div>

                <div className="form-group">
                  <label>Ingredients</label>
                  <textarea className="form-control" placeholder="Add Ingredients, seperated by commas" ref={(node) => {ingredients = node}}/>
                </div>

                <div
                  className="btn btn-default"
                  onClick={(e) => {
                    addRecipe(name.value, ingredients.value);
                    closeDialog(name);
                  }}>Add</div>

              </form>


            </div>

          </div>
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
    closeDialog: (name) => dispatch(closeDialog(name)),
    addRecipe: (name, ingredients) => dispatch(addRecipe(name, ingredients)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipeForm);
