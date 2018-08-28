import React, { Component } from "react";
import { getTemplateList } from "./actions/get-templates";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
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
    templateList: _.get(state, "template.list", [])
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getTemplates: getTemplateList
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateContainer);
