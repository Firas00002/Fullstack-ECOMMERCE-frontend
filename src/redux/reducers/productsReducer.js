import {
  CLEAR_ERRORS,
  GET_ALLPRODUCTS,
  GET_ALLPRODUCTS_FAIL,
  GET_ALLPRODUCTS_SUCCESS,
} from "../actionsTypes/productsActionsTypes";

const initproducts = {
  loading: false,
  allproducts: [],
  errors: null,
};

const productsReducer = (state = initproducts, { type, payload }) => {
  switch (type) {
    case GET_ALLPRODUCTS:
      return {
        ...state,
        loading: true,
        allproducts: [],
      };
    case GET_ALLPRODUCTS_SUCCESS:
      return {
        loading: false,
        allproducts: payload.product,
        productsCount: payload.productsCount,
        resultPerPage: payload.resultPerPage,
        filteredProductsCount: payload.filteredProductsCount,
        errors: null,
      };
    case GET_ALLPRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
      case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };

    default:
      return state;
  }
};

export default productsReducer;
