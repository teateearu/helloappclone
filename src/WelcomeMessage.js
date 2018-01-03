import React, { PureComponent } from "react"
import "./WelcomeMessage.css"
import notifyServer from "./actions/notifyServer"
import { connect } from "react-redux"
import { Button } from 'react-bootstrap'

class WelcomeMessage extends PureComponent {
  componentDidMount() {
    const { message } = this.props.match.params
    this.props.dispatch(notifyServer(message))
  }
  backToStart() {
    window.location.href="/";
  }

  render() {
    const { message } = this.props.match.params
    return (
      <div className="welcomeBackground">
        <div className="Message">
          <h1>Hello {`${message.split(' ')[0]} ${message.split(' ')[1]}`}</h1>
          <p>Your host has been notified and will be in touch with you shortly.</p>
        </div>
        <Button className="backbutton" onClick={this.backToStart}>Back to start</Button>
      </div>
    )
  }
}

const mapStateToProps = ({ messages }) => ({ messages })
export default connect(mapStateToProps, null)(WelcomeMessage)
