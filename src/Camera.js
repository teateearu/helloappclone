import React, { PureComponent } from 'react'
import Webcam from './webcam'
import sendPhoto from './actions/sendPhoto'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import './Camera.css'
import { ProgressBar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class Camera extends PureComponent {

  componentDidMount() {
    this.capture()
  }
  capture = () => {
    this.repeat(1000, () => Promise.all([this.takePhoto()])) // 1000 miliseconds = 1 second

  }

  repeat = (ms, func) => {
        var intervalID = 0
        new Promise(
          r => {
              intervalID = setInterval(func, ms)
              setTimeout(() => {  clearInterval(intervalID)
              } , 11000)
          }
      )}

  takePhoto = () => {
        var video = null
        var w = 0
        var h = 0
        var canvas = null
        var ctx = null
        var dataURI = null
        new Promise(
          r => {
                  video = document.querySelector('video')
                  if (!video) {return null}
                  w = video.videoWidth * 0.5
                  h = video.videoHeight * 0.5
                  canvas = document.createElement('canvas')

                  canvas.width = w
                  canvas.height = h
                  ctx = canvas.getContext('2d')
                  ctx.drawImage(video, 0, 0, w, h)

                  dataURI = canvas.toDataURL('image/jpeg')
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

  backToStart() {
    window.location.href="/";
  }

  render() {
      const messageArr = this.props.messageArray
      if (messageArr.length > 0){
        const nullArray = messageArr.filter(element => element.message ===  null)
        if (nullArray.length === 10){
          this.props.push('/hosts')
        }
        if (messageArr[messageArr.length - 1].message !== null){
          const message = messageArr[messageArr.length - 1].message
          this.props.push(`/message/welcome/${message}`)
          setTimeout(function(){window.location.href="/"}, 10000)
        }

      }
        return (
          <div>
          <div className="Camera">
            <h6>Recognizing...</h6>
            <ProgressBar active now={this.props.messageArray.length*10}/>
            <Button className="backbutton" onClick={this.backToStart}>Back to start</Button>
            </div>
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
