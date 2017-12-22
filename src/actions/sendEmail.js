import ApiClient from '../api/client'

export const CONFIRM_EMAIL = 'CONFIRM_EMAIL'

const api = new ApiClient()

export default (selectedHost) => {
  
  return dispatch => {

    api.post('email/fail', {name: selectedHost})
      .then(res => { console.log(res.body)
        dispatch({ type: CONFIRM_EMAIL, payload: res.body })
      })

  }
}
