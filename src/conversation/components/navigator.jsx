import React, { Component } from "react";

export class Navigator extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a className="btn btn-primary btn-lg btn-block" href="#">
              Back
            </a>
          </div>
          <div className="col-md-4">
            <h1 className="text-center">1/5</h1>
          </div>
          {/* <div className="col-md-4">
            <a className="btn btn-primary btn-block btn-lg" href="#">
              Next
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Navigator;
