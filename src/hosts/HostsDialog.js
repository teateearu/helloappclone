import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Alert, Button } from 'react-bootstrap'

class HostsDialog extends PureComponent {
  render() {
    if (this.props.visible) {
      return (
        <Alert bsStyle="warning" onDismiss={this.handleAlertDismiss.bind(this)}>
          <p>Your host is {this.props.host}</p>
          <p>Please confirm your host or choose again!</p>
          <p>
            <Button bsStyle="info" onClick={this.handleAlertShow.bind(this)}>Confirm host</Button>
            <span> or </span>
            <Button onClick={this.handleAlertDismiss.bind(this)}>Choose another host</Button>
          </p>
        </Alert>
      );
    }
    return null;
  }

  handleAlertDismiss() {
    this.props.hideAlert();
  }

  handleAlertShow() {
    this.props.sendEmail(this.props.host);
  }
}

const mapStateToProps = ({ hosts }) => ({ hosts })

export default connect(mapStateToProps)(HostsDialog)
