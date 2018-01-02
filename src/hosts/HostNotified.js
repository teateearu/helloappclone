import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import './index.css'

class HostNotified extends PureComponent {
  render() {
    return (
      <div className="background">
        <p className="notified">Your host has been notified, please wait.</p>
      </div>
    );
  }
}

const mapStateToProps = ({ hosts }) => ({ hosts })

export default connect(mapStateToProps)(HostNotified)
