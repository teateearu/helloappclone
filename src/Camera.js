import React, { PureComponent } from 'react'
import Webcam from './webcam'
import sendPhoto from './actions/sendPhoto'
import { connect } from 'react-redux'
import WelcomeMessage from './WelcomeMessage'
import NoMatchMessage from './NoMatchMessage'
import { push,replace } from 'react-router-redux'
import './Camera.css'


class Camera extends PureComponent {

  componentDidMount() {
    this.capture()
  }

  wait = ms => new Promise(r => setTimeout(r, ms))

  repeat =
      (ms, func) => {
        var intervalID = 0
        new Promise(
          r => {
              intervalID = setInterval(func, ms),
              const messageArr = this.props.messageArray
              if (messageArr.length > 0){
                if (messageArr[messageArr.length - 1] !==  null)
                  clearInterval(intervalID)
              }
                
              setTimeout(() => {  clearInterval(intervalID)
              } , 11000),
              this.wait(ms).then(r)
          }
      )}

  takePhoto =
      () => {
        var video = null
        var w = 0
        var h = 0
        var canvas = null
        var ctx = null
        var dataURI = null
        new Promise(
          r => {
                  video = document.querySelector('video'),
                  w = video.videoWidth * 0.5,
                  h = video.videoHeight * 0.5,
                  canvas = document.createElement('canvas'),

                  canvas.width = w,
                  canvas.height = h,
                  ctx = canvas.getContext('2d'),
                  ctx.drawImage(video, 0, 0, w, h),

                  dataURI = canvas.toDataURL('image/jpeg'),
                  this.props.sendPhoto(dataURI)
                  return dataURI
                }
      )}

  setRef = (camera) => {
    this.camera = camera
  }


  capture = () => {

    this.repeat(1000, () => Promise.all([this.takePhoto()])) // 1000 miliseconds = 1 second

  }

  render() {
      const messageArr = this.props.messageArray
      console.log("MessageArray ", messageArr)
      if (messageArr.length > 0){
        const nullArray = messageArr.filter(element => element.message ===  null)
        if (nullArray.length === 10){
          const message = "No match found. Please notify your host."
          this.props.push(`/message/nomatch/${message}`)
          setTimeout(function(){window.location.href="/"}, 50000)
        }
        else if (messageArr[messageArr.length - 1] !== null){
          const message = messageArray[0].message
          this.props.push(`/message/welcome/${message}`)
          setTimeout(function(){window.location.href="/"}, 5000)
        }
      }
        return (
          <div className="Camera">
            <Webcam
              audio={false}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              className="Webcam"

            />
      </div>
    )
  }
}
const mapStateToProps = (state) => {

  return { messageArray: state.photos}
}
export default connect(mapStateToProps, { sendPhoto, push })(Camera)
