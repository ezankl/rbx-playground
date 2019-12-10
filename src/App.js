import React from "react";

import "rbx/index.css";
import { Notification, Button, Navbar } from "rbx";

export default function App() {
  function handleClick() {
    console.log(`home clicked`);
  }
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item onClick={$event => handleClick()}>Home</Navbar.Item>
            <Navbar.Item>Documentation</Navbar.Item>
            <Navbar.Item dropdown>
              <Navbar.Link>More</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item>About</Navbar.Item>
                <Navbar.Item>Jobs</Navbar.Item>
                <Navbar.Item>Contact</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item>Report an issue</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Segment>

          <Navbar.Segment align="end">
            <Navbar.Item>
              <Button.Group>
                <Button color="primary">
                  <strong>Sign up</strong>
                </Button>
                <Button color="light">Log in</Button>
              </Button.Group>
            </Navbar.Item>
            <Navbar.Item dropdown>
              <Navbar.Link>More</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item>About</Navbar.Item>
                <Navbar.Item>Jobs</Navbar.Item>
                <Navbar.Item>Contact</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item>Report an issue</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item dropdown>
              <Navbar.Link>More</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item>About</Navbar.Item>
                <Navbar.Item>Jobs</Navbar.Item>
                <Navbar.Item>Contact</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item>Report an issue</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>

      <div className="columns">
        <div className="column is-6">
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
          <div className="button is-large">Column 2.3</div>
        </div>
        <div className="column">
          <Notification color="success" textAlign="centered">
            Column 3
          </Notification>
        </div>
      </div>
    </div>
  );
}
