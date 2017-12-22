import React, { PureComponent } from "react";
import HostsContainer from "./hosts/HostsContainer";
import "./WelcomeMessage.css";

class WelcomeMessage extends PureComponent {
  render() {
    const { message } = this.props.match.params;
    return (
      <div className="WelcomeMessage">
        <div>
          <h1>{message}</h1>
        </div>
      </div>
    );
  }
}

export default WelcomeMessage;
