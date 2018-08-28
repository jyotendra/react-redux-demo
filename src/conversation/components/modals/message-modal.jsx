import React, { Component } from "react";

class MessageModal extends Component {
  render() {
    return (
      <div>
        <div className="modal" id="message_modal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Message</h5>
                <button type="button" className="close" data-dismiss="modal">
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="">
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <input
                      id="message"
                      type="text"
                      className="form-control"
                      placeholder="Enter message"
                    />{" "}
                  </div>
                  <div className="form-group">
                    <label>Message Type</label>
                    <select className="form-control" id="select-type">
                      <option>Text</option>
                      <option>Option</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Select Messenger</label>
                    <select className="form-control">
                      <option value="1">Bot</option>
                      <option value="2">User</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Save changes
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

export default MessageModal;
