import React, { Component } from "react";
import GroupButtons from "./group-buttons";
import GroupMessage from "./group-message";

export default class GroupTile extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Template Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter template name"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <GroupButtons />
            <GroupMessage messages={["Hi", "How are you"]} />
          </div>
        </div>
      </div>
    );
  }
}
