import React, { PureComponent } from 'react'
import HostsContainer from './hosts/HostsContainer'

class WelcomeMessage extends PureComponent{

  render() {
    const {message} = this.props.match.params
    return(
      <div className="WelcomeMessage">
      <p>{message}</p>
      </div>
    )
  }
}

export default WelcomeMessage
