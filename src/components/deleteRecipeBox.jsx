import React, { Component } from 'react';
import { connect } from "react-redux";
import { closeDialog, deleteRecipe } from "./../actions";

class DeleteRecipeBox extends Component {

  render() {
    let { closeDialog, deleteRecipe, id, name } = this.props;

    return (
      <div className="modal-dialog add-recipe-modal-dialog">
        <center>
          <div className="modal-content add-recipe-modal-content">
            <div className="modal-header" style={{padding: "0px", border: "0px"}}>
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true" onClick={(e) => closeDialog(name)}>&times;</span>
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="modal-body">

              <p>Are you sure you wish to delete this recipe?</p>
              <div className="button-container">
                <button
                  className="btn btn-sm btn-danger"
                  style={{marginRight: "10px"}}
                  onClick={(e) => deleteRecipe(id)}>
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-default"
                  onClick={(e) => closeDialog(name)}>
                  cancel
                </button>
              </div>

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
    deleteRecipe: (id) => dispatch(deleteRecipe(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteRecipeBox);
