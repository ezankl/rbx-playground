import React from "react";
import ReactDOM from "react-dom";

import "rbx/index.css";
import { Content, Button, Column, Notification } from "rbx";

export default function App() {
  return (
    <div className="columns">
      <div className="column is-one-third">
        <Notification color="primary" textAlign="centered">
          Column 1
        </Notification>
      </div>
      <div className="column">
        <Notification color="primary" textAlign="centered">
          Column 2.1
        </Notification>
        <Notification color="primary" textAlign="centered">
          Column 2.2
        </Notification>
      </div>
    </div>
  );
}
