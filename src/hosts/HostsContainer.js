import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import './index.css'
import { ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap'

class HostsContainer extends PureComponent {

  render() {
    return (
      <div>
      <ButtonGroup>
        <DropdownButton title="Choose your host" id="bg-nested-dropdown">
          <MenuItem eventKey="1">Lara</MenuItem>
          <MenuItem eventKey="2">Robin</MenuItem>
          <MenuItem eventKey="3">Daniil</MenuItem>
          <MenuItem eventKey="4">Ha</MenuItem>
          <MenuItem eventKey="5">Gabrijela</MenuItem>
          <MenuItem eventKey="6">Tea</MenuItem>
        </DropdownButton>
      </ButtonGroup>
      </div>
    );
  }
}

const mapStateToProps = ({ hosts }) => ({ hosts })

export default connect(mapStateToProps)(HostsContainer)
