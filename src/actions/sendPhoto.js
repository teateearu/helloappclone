import API from '../api/client'
import {push} from 'react-router-redux'
export const SEND_PHOTO = 'SEND_PHOTO'

const api = new API()

export default (newPhoto) => {
  console.log(newPhoto.substring(newPhoto.length -20, newPhoto.length))
  return (dispatch) => {

    api.post('recognize', {photo: newPhoto})
      .then((result) => {
        console.log("result ", result.body.message ,result.body.message === null)
          dispatch({
            type: SEND_PHOTO,
            // payload: result.body
            payload: result.body
          })
      })
      .catch((error) => console.log(error))

  }
}
