import API from '../api/client'

export const SEND_PHOTO = 'SEND_PHOTO'

const api = new API()

export default (newPhoto) => {
  console.log('here')
  console.log(newPhoto.substring(newPhoto.length -20, newPhoto.length))
  return (dispatch) => {

    api.post('recognize', {photo: newPhoto})
      .then((result) => {
        dispatch({
          type: SEND_PHOTO,
          payload: result.body
        })
      })
      .catch((error) => console.log(error))
  }
}
