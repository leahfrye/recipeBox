import React, { Component } from 'react';
import { connect } from "react-redux";
import { closeDialog, setItemToChange } from "./../actions";

class DeleteRecipeBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      closing: false
    };
  };

  handleOnDelete(recipeId, name) {
    this.props.closeDialog(name, recipeId);
    this.props.setItemToChange("delete", recipeId);
  };

  render() {
    let { closeDialog, setItemToChange, name, recipeId } = this.props;

    return (
      <div className="modal-dialog add-recipe-modal-dialog">
        <center>
          <div className="modal-content add-recipe-modal-content">
            <div className="modal-header" style={{padding: "0px", border: "0px"}}>
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true" onClick={(e) => closeDialog(name, recipeId)}>&times;</span>
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="modal-body">

              <p>Are you sure you want to delete this recipe?</p>
              <div className="button-container">
                <button
                  className="btn btn-sm btn-danger"
                  style={{marginRight: "10px"}}
                  onClick={(e) => this.handleOnDelete(recipeId, name)}>
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-default"
                  onClick={(e) => closeDialog(name, recipeId)}>
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
  let { dialog } = state;
  let recipeId = dialog.recipeId;
  return {
    recipeId
  };
};

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeDialog: (name, recipeId) => dispatch(closeDialog(name, recipeId)),
    setItemToChange: (typeOfChange, id) => dispatch(setItemToChange(typeOfChange, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteRecipeBox);
