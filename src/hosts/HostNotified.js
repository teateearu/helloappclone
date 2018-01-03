import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './index.css'

class HostNotified extends PureComponent {
  render() {
    return (
      <div className="background">
        <p className="notified">Your host has been notified and will be in touch with you shortly.</p>
      </div>
    )
  }
}

const mapStateToProps = ({ hosts }) => ({ hosts })

export default connect(mapStateToProps)(HostNotified)
