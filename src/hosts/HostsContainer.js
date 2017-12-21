import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import './index.css'
import { DropdownButton, MenuItem } from 'react-bootstrap'
// import HostsDialog from './HostsDialog'
import fetchHosts from '../actions/fetch'

class HostsContainer extends PureComponent {
  componentWillMount() {
    this.props.dispatch(fetchHosts())
  }
  // giveDialog() {
  //   return (HostsDialog);
  // }

  render() {
    return (
      <div>
        <DropdownButton title="Choose your host" id="bg-dropdown">
          { this.props.hosts.map((host,index) => <MenuItem key={ index }> { host.name } </MenuItem>) }
        </DropdownButton>
      </div>
    );
  }
}

const mapStateToProps = ({ hosts }) => ({ hosts })

export default connect(mapStateToProps)(HostsContainer)
