import ApiClient from '../api/client'

export const FETCHED_HOSTS = 'FETCHED_HOSTS'

const api = new ApiClient()

export default () => {
  return dispatch => {

    api.get('hosts')
      .then(res => { 
        dispatch({ type: FETCHED_HOSTS, payload: res.body })
      })

  }
}
