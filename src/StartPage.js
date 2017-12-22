import React, { PureComponent } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import {Button, Jumbotron} from 'react-bootstrap'
import './StartPage.css'

class StartPage extends PureComponent{
  startPage = () =>
  {
    this.props.push('/camera')
  }

  render() {
    return(
      <div className="StartPage">
        <div>
          <h1> Welcome to Lightbase </h1>
        </div>
        <Button className="Start" bsSize="large" onClick={this.startPage.bind(this)}>START</Button>
      </div>
    )
  }
}

export default connect(null, { push })(StartPage)
