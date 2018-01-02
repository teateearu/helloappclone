import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import './index.css'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import HostsDialog from './HostsDialog'
import fetchHosts from '../actions/fetch'
import sendEmail from '../actions/sendEmail'

class HostsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      host: null
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchHosts())
  }

  updateShowAlert(host) {
    this.setState({ showAlert: true, host: host})
  }

  hideAlert() {
    this.setState({ showAlert: false, host: null})
  }

  sendEmail(host) {
    this.props.dispatch(sendEmail(host))
    this.setState({ showAlert: false, host: null})

  }

  render() {
    const message = this.props.messages
    return (
      <div className="background">
        <div className="message">No match found. Please notify your host:</div><br/>
        <div className="button">
          <DropdownButton className="dropdownbutton" title="Choose your host" id="bg-dropdown" >
            { this.props.hosts.map((host,index) => <MenuItem className="menuitem" key={ index } onSelect={this.updateShowAlert.bind(this, host)}> { host } </MenuItem>) }
          </DropdownButton>
          <HostsDialog className="alert"visible={this.state.showAlert} host={this.state.host} hideAlert={this.hideAlert.bind(this)} sendEmail={this.sendEmail.bind(this)}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ hosts, messages }) => ({ hosts, messages })

export default connect(mapStateToProps)(HostsContainer)
