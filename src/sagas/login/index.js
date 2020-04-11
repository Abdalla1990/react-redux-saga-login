import {
	call,
	cancel,
	cancelled,
	fork,
	put,
	take,
	takeEvery,
} from 'redux-saga/effects';
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGOUT,
} from '../../actions/login/actionTypes';

import { History } from '../../App';

export async function authApi(email, password) {
	debugger;
	try {
		const response = await fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});
		const json = await response.json();
		console.log('json :', json);
		return json;
	} catch (error) {
		throw error;
	}
}

export function* authorize(email, password) {
	try {
		const token = yield call(authApi, email, password); // calls the authApi method
		yield put({ type: LOGIN_SUCCESS }); // triggers a LOGIN_SUCCESS action
		yield put({ type: 'SAVE_TOKEN', token }); // triggers a SAVE_TOKEN action
	} catch (error) {
		yield put({ type: 'LOGIN_ERROR', error });
	} finally {
		if (yield cancelled()) {
			yield put({ type: 'LOGIN_CANCELLED' });
		}
	}
}

export function* loginFlow({ data }) {
	const { email, password } = data; // waits for a LOGIN_REQUEST action

	yield authorize(email, password);
}

export function* logoutFlow() {
	yield put({ type: 'DELETE_TOKEN' }); // triggers a DELETE_TOKEN action
	yield History.push('/login');
}

export function* manageRoute() {
	yield History.push('/home');
}

/* ------------- Connect Types To Sagas ------------- */
export default function* loginSagas() {
	debugger;
	yield takeEvery(LOGIN_REQUEST, loginFlow);
	yield takeEvery(LOGIN_SUCCESS, manageRoute);
	yield takeEvery(LOGOUT, logoutFlow);
}
