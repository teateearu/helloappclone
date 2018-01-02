import React, { PureComponent } from "react";
import HostsContainer from "./hosts/HostsContainer";
import "./WelcomeMessage.css";
import notifyServer from "./actions/notifyServer";
import { connect } from "react-redux";

class WelcomeMessage extends PureComponent {
  componentDidMount() {
    const { message } = this.props.match.params;
    this.props.dispatch(notifyServer(message));
  }

  render() {
    const { message } = this.props.match.params;
    return (
      <div className="WelcomeMessage">
        <div>
          <br/><h1>{message.split(', Welcome')[0]}</h1><br/>
          <p>Your host has been notified</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ messages }) => ({ messages });
export default connect(mapStateToProps, null)(WelcomeMessage);
