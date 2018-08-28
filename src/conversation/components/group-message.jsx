import React, { Component } from "react";
import PropTypes from "prop-types";

export default class GroupMessage extends Component {
  render() {
    return (
      <div className="px-5 border">
        {this.props.messages.map((message, index) => {
          return (
            <div key={index} className="row">
              <div className="col-md-10">
                <p className="lead text-center my-1 bg-secondary">
                  {message}
                  &nbsp;
                </p>
              </div>
              <div className="col-md-1">
                <a className="btn btn-danger btn-block text-center my-1" href="#">
                  X{" "}
                </a>
              </div>
              <div className="col-md-1">
                <a className="btn btn-block text-center my-1 btn-primary" href="#">
                  -&gt;{" "}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

GroupMessage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired
};
