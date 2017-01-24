import React, { Component } from 'react';
import { connect } from "react-redux";
import { closeDialog, editRecipe } from "./../actions";

class EditRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients.join()
    };
  };

  handleChange(type, input) {
    if (type === "name") {
      this.setState({name: input});
    }
    else if (type === "ingredients") {
      this.setState({ingredients: input});
    }
  };

  render() {
    let { closeDialog, editRecipe, recipe, dialogName, recipes } = this.props;
    let recipeName;
    let ingredients;

    let index = recipes.indexOf(recipe);

    return (
      <div>
        <div className="modal-dialog edit-recipe-dialog">

          <form>
            <div className="form-group">
              <label>Recipe Name</label>
              <input
                className="form-control"
                ref={(node) => {recipeName = node}}
                value={this.state.name}
                onChange={(e) => this.handleChange("name", recipeName.value)}/>
            </div>

            <div className="form-group">
              <label>Ingredients</label>
              <textarea
                className="form-control"
                ref={(node) => {ingredients = node}}
                value={this.state.ingredients}
                onChange={(e) => this.handleChange("ingredients", ingredients.value)}/>
            </div>

            <button
              className="btn btn-success btn-sm"
              style={{marginRight: "10px"}}
              onClick={(e) => {
                e.preventDefault();
                editRecipe(this.state.name, this.state.ingredients, recipe.id, index);
                closeDialog(dialogName);
              }}>Save</button>

            <button
              className="btn btn-default btn-sm"
              onClick={(e) => {
                closeDialog(dialogName);
                e.preventDefault();
              }}>Cancel</button>

          </form>

        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  let { recipes } = state;
  return {
    recipes,
  };
};

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeDialog: () => dispatch(closeDialog()),
    editRecipe: (name, ingredients, id, index) => dispatch(editRecipe(name, ingredients, id, index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipeForm);
