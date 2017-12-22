import React, { PureComponent } from 'react'
import HostsContainer from './hosts/HostsContainer'


class NoMatchMessage extends PureComponent{

  render() {
    const {message} = this.props.match.params
    return(
      <div className="NoMatchMessage">
      <p>{message}</p>
      <HostsContainer />
      </div>
    )
  }
}

export default NoMatchMessage
