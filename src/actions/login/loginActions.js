import * as types from './actionTypes';

export function loggedIn() {
	return { type: types.LOGGED_IN };
}

export function loginRequest({ email, password }) {
	debugger;
	return {
		type: types.LOGIN_REQUEST,
		data: { email, password },
	};
}

export function loginOut() {
	return {
		type: types.LOGOUT,
	};
}
