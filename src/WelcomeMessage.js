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
          <h1>{message}</h1>
          <p>{this.props.messages}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ messages }) => ({ messages });
export default connect(mapStateToProps, null)(WelcomeMessage);
