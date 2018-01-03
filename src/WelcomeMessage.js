import React, { PureComponent } from "react"
import "./WelcomeMessage.css"
import notifyServer from "./actions/notifyServer"
import { connect } from "react-redux"

class WelcomeMessage extends PureComponent {
  componentDidMount() {
    const { message } = this.props.match.params
    this.props.dispatch(notifyServer(message))
  }

  render() {
    const { message } = this.props.match.params
    return (
      <div className="WelcomeMessage">
        <div className="Message">
          <br/><h1>Hello, {`${message.split(' ')[0]} ${message.split(' ')[1]}`}</h1><br/>
          <p>Your host has been notified and will be in touch with you shortly.</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ messages }) => ({ messages })
export default connect(mapStateToProps, null)(WelcomeMessage)
