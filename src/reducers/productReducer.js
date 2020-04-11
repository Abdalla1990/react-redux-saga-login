import actionTypes from "../actions/product/actionTypes";

import initialState from "./initialState";

export default (state = initialState.products, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_REMOVE:
      return { ...state, loading: true };
    case actionTypes.PRODUCT_REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteProduct: {
          ReturnCode: 200,
          ReturnMessage: "Delete Record Successfully",
        },
      };
    case actionTypes.PRODUCT_REMOVE_FAILURE:
      return {
        ...state,
        loading: false,
        deleteProduct: {
          ReturnCode: 400,
          ReturnMessage: "somthing went wrong",
        },
      };
    case actionTypes.ADD_PRODUCT:
      return { ...state, loading: true };
    case actionTypes.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        addProduct: {
          ReturnCode: 200,
          ReturnMessage: "Add Record Successfully",
        },
      };
    case actionTypes.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        addProduct: { ReturnCode: 400, ReturnMessage: "somthing went wrong" },
      };
    case actionTypes.EDIT_PRODUCT:
      return { ...state, loading: true };
    case actionTypes.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        editProduct: {
          ReturnCode: 200,
          ReturnMessage: "Edit/Update Record Successfully",
        },
      };
    case actionTypes.EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        editProduct: { ReturnCode: 400, ReturnMessage: "somthing went wrong" },
      };
    default:
      return state;
  }
};
