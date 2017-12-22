import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import './index.css'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import HostsDialog from './HostsDialog'
import fetchHosts from '../actions/fetch'

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
    console.log(`I am sending an email to ${host}!`)
    this.setState({ showAlert: false, host: null})

  }

  render() {
    return (
      <div className="background">
        <div className="button">
          <DropdownButton className="dropdownbutton" title="Choose your host" id="bg-dropdown" >
            { this.props.hosts.map((host,index) => <MenuItem className="menuitem" key={ index } onSelect={this.updateShowAlert.bind(this, host)}> { host } </MenuItem>) }
          </DropdownButton>
          <HostsDialog visible={this.state.showAlert} host={this.state.host} hideAlert={this.hideAlert.bind(this)} sendEmail={this.sendEmail.bind(this)}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ hosts }) => ({ hosts })

export default connect(mapStateToProps)(HostsContainer)
