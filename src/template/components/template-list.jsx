import React from "react";
export const TemplateList = ({ templateList = [] }) => {
  return (
    <div>
      <ul>
        {templateList.map((template, index) => {
          return <li key={index}>{template.name}</li>;
        })}
      </ul>
    </div>
  );
};
