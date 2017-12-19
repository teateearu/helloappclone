import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ShowImage extends PureComponent{
  static propTypes = {
    image: PropTypes.string,
    mybla: PropTypes.string,
  }
  render() {
    console.log(this.props.params.img)

    return(
      <div className="ShowImage">
        <p> Photo:  <img src={`${this.props.params.img}`}  alt=""/></p>
      </div>
    )
  }
}

export default ShowImage
