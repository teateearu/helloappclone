import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

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

export default connect(null,{push})(WelcomeMessage)
