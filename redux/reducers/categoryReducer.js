import * as actionTypes from "../action-types/categoryActionTypes";

const INIT_STATE = {
  loadingCategories: false,
  categories: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOAD_START: {
      return {
        ...state,
        loadingCategories: true
      };
    }
    case actionTypes.ALL_CATEGORIES: {
      return {
        ...state,
        categories: action.payload
      };
    }
    case actionTypes.LOAD_END: {
      return {
        ...state,
        loadingCategories: false
      };
    }
    default:
      return state;
  }
};
