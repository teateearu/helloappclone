
// src/routes.js

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Camera from './Camera'
import HostsContainer from './hosts/HostsContainer'


export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Camera} />
        <Route path="/hosts" component={HostsContainer} />
      </div>
    )
  }
}
