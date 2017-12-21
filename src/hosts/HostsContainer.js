import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import './index.css'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import HostsDialog from './HostsDialog'
import fetchHosts from '../actions/fetch'

class HostsContainer extends PureComponent {
  constructor(props) {
    super(props);
      this.state = { alertVisible: false };
    }

  componentWillMount() {
    this.props.dispatch(fetchHosts())
  }

  giveDialog() {
    this.setState({ alertVisible: true })
  }

  render() {
    return (
      <div>
        <DropdownButton title="Choose your host" id="bg-dropdown" >
          { this.props.hosts.map((host,index) => <MenuItem key={ index } onSelect={() => this.giveDialog()}> { host } </MenuItem>) }
        </DropdownButton>
      </div>
    );
  }
}

const mapStateToProps = ({ hosts }) => ({ hosts })

export default connect(mapStateToProps)(HostsContainer)
