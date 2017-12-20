
// src/routes.js

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Camera from './Camera'
import HostsContainer from './hosts/HostsContainer'
import StartPage from './StartPage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/camera" component={Camera} />
        <Route exact path="/hosts" component={HostsContainer} />
      </div>
    )
  }
}
