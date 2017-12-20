import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import HostsContainer from './hosts/HostsContainer'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HostsContainer} />
        <Route path="/hosts" component={HostsContainer} />
      </div>
    )
  }
}
