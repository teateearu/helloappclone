import React, { PureComponent } from 'react'
import Webcam from 'react-webcam'
import sendPhoto from './actions/sendPhoto'
import { connect } from 'react-redux'
import WelcomeMessage from './WelcomeMessage'
import { push,replace } from 'react-router-redux'

class Camera extends PureComponent {


  wait =
      ms => new Promise(
          r => setTimeout(r, ms)
      )

  repeat =
      (ms, func) => {
        var intervalID = 0
        new Promise(
          r => {
              intervalID = setInterval(func, ms),
              setTimeout(() => {  clearInterval(intervalID)
                                  console.log('repeat end')
                               } , 10000),
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
                  console.log('repeating...'),
                  console.log(dataURI.substring(dataURI.length - 20, dataURI.length))
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
      console.log("MessageObj ", messageArr)
      if (messageArr.length === 10){
        const nullArray = messageArr.filter(element => element.message ===  null)
        const messageArray = messageArr.filter(element => element.message !==  null)
        if (nullArray.length === 10){
          const message = "No match found."
          this.props.push(`/message/${message}`)
          setTimeout(function(){window.location.href="/"}, 5000)
        }
        else if (messageArray.length > 0){
          const message = messageArray[0].message
          this.props.push(`/message/${message}`)
          setTimeout(function(){window.location.href="/"}, 5000)
        }
      }
        return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
        <button onClick={this.capture}>Capture photo</button>


      </div>
    )
  }
}
const mapStateToProps = (state) => {

  return { messageArray: state.photos}
}
export default connect(mapStateToProps, { sendPhoto, push })(Camera)
