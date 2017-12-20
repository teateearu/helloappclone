import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import './index.css'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import HostsDialog from './HostsDialog'

class HostsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <DropdownButton title="Choose your host" id="bg-dropdown">
          <MenuItem eventKey="1">Lara</MenuItem>
          <MenuItem eventKey="2">Robin</MenuItem>
          <MenuItem eventKey="3">Daniil</MenuItem>
          <MenuItem eventKey="4">Ha</MenuItem>
          <MenuItem eventKey="5">Gabrijela</MenuItem>
          <MenuItem onClick={this.toggleModal}>Tea</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

const mapStateToProps = ({ hosts }) => ({ hosts })

export default connect(mapStateToProps)(HostsContainer)
