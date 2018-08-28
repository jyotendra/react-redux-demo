import { templateTypes } from "../actions/get-templates";

const templateInitState = {
  list: []
};

export default function templateListReducer(state = templateInitState, action) {
  switch (action.type) {
    case templateTypes.GOT_TEMPLATES:
      return Object.assign({}, state, { list: action.payload.templates });

    default:
      return templateInitState;
  }
}
