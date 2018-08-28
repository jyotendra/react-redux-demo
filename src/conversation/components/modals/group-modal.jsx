import React, { Component } from "react";

class GroupModal extends Component {
  render() {
    return (
      <div>
        <div className="modal" id="group_modal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add sub-group</h5>
                <button type="button" className="close" data-dismiss="modal">
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <form className="">
                      <div className="form-group">
                        <label>Group Name</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter group name for conversation"
                        />{" "}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupModal;
