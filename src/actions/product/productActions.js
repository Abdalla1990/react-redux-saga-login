import * as types from "./actionTypes";

//Action creator for Product Delete
export const productRemove = (req) => ({
  type: types.PRODUCT_REMOVE,
  payload: req,
});
export const productRemoveSuccess = (res) => ({
  type: types.PRODUCT_REMOVE_SUCCESS,
  payload: res,
});
export const productRemoveFailure = (err) => ({
  type: types.PRODUCT_REMOVE_FAILURE,
  payload: err,
});

//Action creator for Product Add
export const productAdd = (req) => ({
  type: types.ADD_PRODUCT,
  payload: req,
});
export const productAddSuccess = (res) => ({
  type: types.ADD_PRODUCT_SUCCESS,
  payload: res,
});
export const productAddFailure = (err) => ({
  type: types.ADD_PRODUCT_FAILURE,
  payload: err,
});

//Action creator for Poduct Edit/Update
export const productEdit = (req) => ({
  type: types.EDIT_PRODUCT,
  payload: req,
});
export const productEditSuccess = (res) => ({
  type: types.EDIT_PRODUCT_SUCCESS,
  payload: res,
});
export const productEditFailure = (err) => ({
  type: types.EDIT_PRODUCT_FAILURE,
  payload: err,
});
