import { all, fork, put, takeEvery } from "redux-saga/effects";

import {
  PRODUCT_REMOVE,
  ADD_PRODUCT,
  EDIT_PRODUCT,
} from "../../actions/product/actionTypes";

import {
  productRemoveSuccess,
  productRemoveFailure,
  productAddSuccess,
  productAddFailure,
  productEditSuccess,
  productEditFailure,
} from "../../actions/product/productActions";

function* productRemove({ Payload }) {
  try {
    // 'put' is a which creates the dispatch Effect.
    yield put(productRemoveSuccess());
  } catch (error) {
    // We can catch errors inside the Saga using the familiar try/catch syntax.
    yield put(productRemoveFailure());
  }
}

function* productAdd({ Payload }) {
  try {
    yield put(productAddSuccess());
  } catch (error) {
    yield put(productAddFailure());
  }
}

function* productEdit({ Payload }) {
  try {
    yield put(productEditSuccess());
  } catch (error) {
    yield put(productEditFailure());
  }
}

export function* watchProductRemove() {
  yield takeEvery(PRODUCT_REMOVE, productRemove);
}

export function* watchProductAdd() {
  yield takeEvery(ADD_PRODUCT, productAdd);
}

export function* watchProductEdit() {
  yield takeEvery(EDIT_PRODUCT, productEdit);
}

export default function* productsSaga() {
  yield all([
    fork(watchProductRemove),
    fork(watchProductAdd),
    fork(watchProductEdit),
  ]);
}

// export default function* productsSaga() {
//   yield [
//     // some sagas only receive an action
//     takeLatest(PRODUCT_REMOVE, productRemove),
//     takeLatest(ADD_PRODUCT, productAdd),
//     takeLatest(EDIT_PRODUCT, productEdit),
//   ];
// }
