import React, { PureComponent } from 'react'
import Webcam from 'react-webcam'
import ShowImage from './ShowImage'
import {BrowserRouter} from 'react-router-dom'

class Camera extends PureComponent {

  wait =
      ms => new Promise(
          r => setTimeout(r, ms)
      )

  repeat =
      (ms, func) => {

        new Promise(
          r => {
              intervalID = setInterval(func, ms),
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
                  console.log(dataURI)

                  return dataURI
                }
      )}

  stopAfter10Secs =
      () => new Promise(
            r => r(setTimeout(() => {
                                        clearInterval(intervalID)
                                        console.log('repeat end')
                                     } , 10000))
                                )


  setRef = (camera) => {
    this.camera = camera
  }


  capture = () => {
    var intervalID = 0
    this.repeat(1000, () => Promise.all([this.takePhoto()])) // 1000 miliseconds = 1 second
    .then(this.stopAfter10Secs())  // starts timer to end repetitions
    .then(console.log('repeat start')) // informs that all actions were started correctly and we are waiting for them to finish

  }

  render() {
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

export default Camera
