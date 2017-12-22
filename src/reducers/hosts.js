import { FETCHED_HOSTS } from "../actions/fetch"
import {CONFIRM_EMAIL} from "../actions/sendEmail"

export default (state = [], { type, payload } = {}) => {
	switch (type) {
		case FETCHED_HOSTS:
			return [...payload]
    default :
      return state
  }
}
