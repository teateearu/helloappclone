import { FETCHED_HOSTS } from "../actions/fetch"

export default (state = [], { type, payload } = {}) => {
	switch (type) {
		case FETCHED_HOSTS:
			return [...payload]
    default :
      return state
  }
}
