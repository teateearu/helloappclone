import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './index.css'
import { Button } from 'react-bootstrap'

class HostNotified extends PureComponent {

  backToStart() {
    window.location.href="/";
  }

  render() {
    return (
      <div className="background">
        <p className="notified">Your host has been notified and will be in touch with you shortly.</p>
        <Button className="backbutton" onClick={this.backToStart}>Back to start</Button>
      </div>
    )
  }
}

const mapStateToProps = ({ hosts }) => ({ hosts })

export default connect(mapStateToProps)(HostNotified)
