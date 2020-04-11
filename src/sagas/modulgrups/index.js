import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  FETCH_MODULGRUPS,
  DELETE_MODULGRUP,
  CREATE_MODULGRUP,
  UPDATE_MODULGRUP,
} from "../../actions/modulgrup/actionTypes";

const API_ROOT = "http://localhost:3001/api";

// FETCH MODUL GROUP
export async function fetchModulGrupInAPI() {
  try {
    const response = await fetch(`${API_ROOT}/ModulGrup`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}

function* fetchModulGrup() {
  yield put({ type: "FETCH_MODULGRUPS_PENDING" });
  try {
    const ModulGrupsFromApi = yield call(fetchModulGrupInAPI);
    yield put({ type: "FETCH_MODULGRUPS_SUCCESS", payload: ModulGrupsFromApi });
  } catch (error) {
    yield put({ type: "FETCH_MODULGRUPS_FAILURE" });
    console.error(error);
  }
}

// CREATE MODUL GROUP
export async function createModulGrupFromApi(payload) {
  try {
    const response = await fetch(`${API_ROOT}/ModulGrup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload }),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}

function* createModulGrup(action) {
  yield put({ type: "CREATE_MODULGRUP_PENDING" });

  try {
    const newModulGrup = yield call(createModulGrupFromApi, action.payload);
    yield put({ type: "CREATE_MODULGRUP_SUCCESS", payload: newModulGrup });
  } catch (error) {
    yield put({ type: "CREATE_MODULGRUP_FAILURE" });
    console.error(error);
  }
}

// UPDATE MODUL GRUP
export async function updateModulGrupInAPI(payload) {
  try {
    const response = await fetch(`${API_ROOT}/ModulGrup`, {
      method: "‘PUT’",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload }),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}

function* updateModulGrup(action) {
  yield put({ type: "UPDATE_MODULGRUP_PENDING" });
  try {
    const updatedModulGrup = yield call(updateModulGrupInAPI, action.payload);
    yield put({ type: "UPDATE_MODULGRUP_SUCCESS", payload: updatedModulGrup });
  } catch (error) {
    yield put({ type: "UPDATE_MODULGRUP_FAILURE" });
    console.error(error);
  }
}

// DELETE MODUL GRUP
export async function deleteModulGrupFromApi(id) {
  try {
    const response = await fetch(`${API_ROOT}/ModulGrup/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}

function* deleteModulGrup(action) {
  yield put({ type: "DELETE_MODULGRUP_PENDING", id: action.id });
  try {
    const { count } = yield call(deleteModulGrupFromApi, action.id);
    if (count !== 1) throw new Error("API delete request failed");
    yield put({ type: "DELETE_MODULGRUP_SUCCESS", id: action.id });
  } catch (error) {
    yield put({ type: "DELETE_MODULGRUP_FAILURE" });
    console.error(error);
  }
}

/* ------------- Connect Types To Sagas ------------- */
export default function* modulGrupsSagas() {
  debugger;
  yield all([
    takeLatest(CREATE_MODULGRUP, createModulGrup),
    takeLatest(FETCH_MODULGRUPS, fetchModulGrup),
    takeLatest(UPDATE_MODULGRUP, updateModulGrup),
    takeLatest(DELETE_MODULGRUP, deleteModulGrup),
  ]);
}
