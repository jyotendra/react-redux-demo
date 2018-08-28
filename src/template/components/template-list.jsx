import React from "react";
export const TemplateList = ({ templateList }) => {
  return (
    <div>
      <ul>
        {templateList.map(template => {
          return <li>{template.name}</li>;
        })}
      </ul>
    </div>
  );
};
