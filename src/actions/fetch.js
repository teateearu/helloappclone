import ApiClient from '../api/client'
// import loading from '../loading' // ???
// import loadError from '../loadError' // ???
export const FETCHED_HOSTS = 'FETCHED_HOSTS'

const api = new ApiClient()

export default () => {
  return dispatch => {
    // dispatch(loading(true)) // ???

    api.get('hosts')
      .then(res => { console.log(res.body)
        dispatch({ type: FETCHED_HOSTS, payload: res.body })
      })

      //.catch(err => dispatch(loadError(err))) ???

    // dispatch(loading(false)) // ???
  }
}
