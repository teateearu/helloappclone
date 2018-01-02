import React, { PureComponent } from 'react'
import HostsContainer from './hosts/HostsContainer'


class NoMatchMessage extends PureComponent{

  render() {
    return(
      <div className="NoMatchMessage">
      <HostsContainer />
      </div>
    )
  }
}

export default NoMatchMessage
