import React, { Component } from "react";
import { getTemplateList } from "./actions/get-templates";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { TemplateList } from "./components/template-list";
class TemplateContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTemplates();
  }
  render() {
    return <TemplateList {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    templateList: state.templates
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getTemplates: getTemplateList
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateContainer);
