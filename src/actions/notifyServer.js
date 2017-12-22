import ApiClient from "../api/client";
import { CONFIRM_EMAIL } from "./sendEmail";

export const NOTIFY_SERVER = "NOTIFY_SERVER";

const api = new ApiClient();

export default message => {
	console.log(message);
	return dispatch => {
		api.post("email/success", { message: message }).then(res => {
			console.log(res.body);
			dispatch({ type: CONFIRM_EMAIL, payload: res.body });
		});
	};
};