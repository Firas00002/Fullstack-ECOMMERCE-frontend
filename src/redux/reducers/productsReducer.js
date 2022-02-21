import {
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
      };
    case GET_ALLPRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        allproducts: payload,
        errors: null,
      };
    case GET_ALLPRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    default:
      return state;
  }
};



export default productsReducer;






