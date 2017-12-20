import {SEND_PHOTO} from '../actions/sendPhoto'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SEND_PHOTO:
      //const newClass = { ...payload }
      return state//.concat([newClass])
    default:
      return state
  }}
