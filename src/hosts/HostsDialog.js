import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class HostsDialog extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Please confirm your host</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          You chose that host.
        </Modal.Body>

        <Modal.Footer>
          <Button>Back</Button>
          <Button bsStyle="primary">Confirm</Button>
        </Modal.Footer>

      </Modal.Dialog>
    </div>
  );
}
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};
