import React, { Component } from "react";

export class GroupButtons extends Component {
  render() {
    return (
      <div className="row px-5 border">
        <div className="col-md-3">
          <a
            href="#"
            className="btn btn-outline-primary w-100 m-1"
            data-toggle="modal"
            data-target="#group_modal"
          >
            Create Group
          </a>
        </div>
        <div className="col-md-3" />
        <div className="col-md-3" />
        <div className="col-md-3">
          <a
            href="#"
            className="btn btn-outline-primary w-100 m-1"
            data-toggle="modal"
            data-target="#message_modal"
          >
            Create Message
          </a>
        </div>
      </div>
    );
  }
}

export default GroupButtons;
