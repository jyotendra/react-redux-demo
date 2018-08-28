export const templateTypes = {
  GOT_TEMPLATES: "GET_TEMPLATES",
  GOT_TEMPLATE_GROUP: "GET_TEMPLATE_GROUP"
};
export function getTemplateList() {
  return {
    type: templateTypes.GOT_TEMPLATES,
    payload: {
      templates: [{ name: "Diet suggestion" }, { name: "Exercise suggestion" }]
    }
  };
}

export function getTemplateGroup(id) {
  let group;
  if (id) {
    group = {
      /* return group with id */
    };
  } else {
    group = {
      /* return main group */
    };
  }

  return {
    type: templateTypes.GOT_TEMPLATE_GROUP,
    payload: {
      group
    }
  };
}
