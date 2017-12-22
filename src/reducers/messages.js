import {CONFIRM_EMAIL} from "../actions/sendEmail"

export default (state = "", { type, payload } = {}) => {
	switch (type) {
      case CONFIRM_EMAIL:
        return payload
      default:
        return state
  }
}
