import React, { Component } from "react";
import MessageModal from "./conversation/components/modals/message-modal";
import GroupModal from "./conversation/components/modals/group-modal";
import GroupTile from "./conversation/components/group-tile";
import Navigator from "./conversation/components/navigator";

import Template from "./template/template.container";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  data = {
    name: "My new template",
    group: {
      name: "Main group",
      id: 1,
      messages: [
        {
          id: 1,
          type: "text",
          content: "Hi"
        },
        {
          id: 2,
          type: "text",
          content: "I want to ask that"
        },
        {
          id: 3,
          type: "option",
          content: "Do you want to exit",
          options: [
            { id: 4, type: "text", content: "Yes", directToGroupId: null },
            { id: 5, type: "text", content: "No", directToGroupId: null }
          ]
        }
      ]
    }
  };

  // render() {
  //   return (
  //     <div className="App">
  //       <div className="py-5">
  //         <Navigator />
  //         <GroupTile />
  //       </div>
  //       <MessageModal />
  //       <GroupModal />
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="App">
        <Template />
      </div>
    );
  }
}

export default App;
