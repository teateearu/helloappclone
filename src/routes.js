
// src/routes.js

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Camera from './Camera'
import HostsContainer from './hosts/HostsContainer'
import StartPage from './StartPage'
import WelcomeMessage from './WelcomeMessage'
import HostNotified from './hosts/HostNotified'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/camera" component={Camera} />
        <Route exact path="/message/welcome/:message" component={WelcomeMessage} />
        <Route exact path="/hosts" component={HostsContainer} />
        <Route exact path="/hostnotified" component={HostNotified} />
      </div>
    )
  }
}
