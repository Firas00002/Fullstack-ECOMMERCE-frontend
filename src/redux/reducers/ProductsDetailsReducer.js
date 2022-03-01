import { GET_ALLPRODUCTSDETAILS, GET_ALLPRODUCTSDETAILS_FAIL, GET_ALLPRODUCTSDETAILS_SUCCESS } from "../actionsTypes/productsActionsTypes";

const initProductsDetails={
loading:false,
product:{},
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
          
          loading: false,
          product: payload,
          errors: null,
        };
      case GET_ALLPRODUCTSDETAILS_FAIL:
        return {
          
          loading: false,
          errors: payload,
        };
  
      default:
        return state;
    }
  };

  export default productsDetailsReducer;
  