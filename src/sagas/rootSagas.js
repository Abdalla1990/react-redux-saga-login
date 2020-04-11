import { all } from "redux-saga/effects";
import LoginSaga from "./login";
import ProductsSaga from "./products";
import ModulGrupsSagas from "./modulgrups";

export default function* rootSagas() {
  yield all([LoginSaga(), ModulGrupsSagas(), ProductsSaga()]);
}
