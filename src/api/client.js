import request from "superagent";

export default class ApiClient {
	defaultOptions = {
		tokenStorageKey: "helloApiJWT"
	};

	constructor(host, options = {}) {
		this.host = host || "https://29c4cef7.ngrok.io";
		this.options = { ...this.defaultOptions, ...options };
	}

	get(path) {
		return request.get(this.createUrl(path)).set(this.headers());
	}

	post(path, data = {}) {
		return request
			.post(this.createUrl(path))
			.set(this.headers())
			.send(data);
	}

	put(path, data = {}) {
		return request
			.put(this.createUrl(path))
			.set(this.headers())
			.send(data);
	}

	patch(path, data = {}) {
		return request
			.patch(this.createUrl(path))
			.set(this.headers())
			.send(data);
	}

	delete(path) {
		return request.delete(this.createUrl(path)).set(this.headers());
	}

	signOut() {
		localStorage.removeItem(this.options.tokenStorageKey);
	}

	headers() {
		let headers = {
			Accept: "application/json"
		};

		if (this.isAuthenticated()) {
			headers.Authorization = `Bearer ${this.getToken()}`;
		}

		return headers;
	}

	isAuthenticated() {
		return !!this.getToken();
	}

	// Create a full URL to our API, including the host and path
	createUrl(path) {
		return [this.host, path].join("/");
	}

	getToken() {
		return localStorage.getItem(this.options.tokenStorageKey);
	}

	storeToken(token) {
		localStorage.setItem(this.options.tokenStorageKey, token);
	}
}
