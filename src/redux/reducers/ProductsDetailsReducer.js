import { GET_ALLPRODUCTSDETAILS, GET_ALLPRODUCTSDETAILS_FAIL, GET_ALLPRODUCTSDETAILS_SUCCESS } from "../actionsTypes/productsActionsTypes";

const initProductsDetails={
loading:false,
allproducts:null,
errors:null
}







 const productsDetailsReducer = (state = initProductsDetails, { type, payload }) => {
    switch (type) {
      case GET_ALLPRODUCTSDETAILS:
        return {
          ...state,
          loading: true,
        };
      case GET_ALLPRODUCTSDETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          allproducts: payload,
          errors: null,
        };
      case GET_ALLPRODUCTSDETAILS_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
  
      default:
        return state;
    }
  };

  export default productsDetailsReducer;
  