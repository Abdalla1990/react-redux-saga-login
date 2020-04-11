import actionTypes from "../actions/modulgrup/actionTypes";
import initialState from "./initialState";

export default function modulgrups(state = initialState.modulgrups, action) {
  switch (action.type) {
    case actionTypes.FETCH_MODULGRUPS_PENDING:
    case actionTypes.DELETE_MODULGRUP_PENDING:
    case actionTypes.CREATE_MODULGRUP_PENDING:
    case actionTypes.UPDATE_MODULGRUP_PENDING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_MODULGRUPS_SUCCESS:
      return {
        items: action.payload.reverse(),
        loading: false,
      };
    case actionTypes.FETCH_MODULGRUPS_FAILURE:
      return {
        items: [],
        loading: false,
      };
    case actionTypes.DELETE_MODULGRUP_SUCCESS: {
      const post_id = action.id;
      return {
        items: state.items.filter((post) => post.id !== post_id),
        loading: false,
      };
    }
    case actionTypes.CREATE_MODULGRUP_SUCCESS:
      return {
        items: [action.payload].concat(state.items),
        loading: false,
      };
    case actionTypes.UPDATE_MODULGRUP_SUCCESS: {
      const { id, ...rest } = action.payload;

      return {
        items: state.items.map((post) => {
          if (post.id === id) {
            return { ...post, ...rest };
          }
          return post;
        }),
        loading: false,
      };
    }
    case actionTypes.CREATE_MODULGRUP_FAILURE:
    case actionTypes.DELETE_MODULGRUP_FAILURE:
    case actionTypes.UPDATE_MODULGRUP_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
