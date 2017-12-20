import React, { PureComponent } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class StartPage extends PureComponent{
  startPage = () =>
  {
    this.props.push('/camera')
  }

  render() {
    return(
      <div className="StartPage">
          <button onClick={this.startPage.bind(this)}>Start</button>
      </div>
    )
  }
}

export default connect(null, { push })(StartPage)
