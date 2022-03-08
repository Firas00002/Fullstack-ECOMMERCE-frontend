import {
 
  GET_ALLPRODUCTS,
  GET_ALLPRODUCTS_FAIL,
  GET_ALLPRODUCTS_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_RESET,
  NEW_REVIEW_SUCCESS,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS ,
  ADMIN_PRODUCT_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_RESET,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_RESET,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_RESET,
} from "../actionsTypes/productsActionsTypes";

const initproducts = {
  loading: false,
  allproducts: [],
  errors: null,
  success:false,
  product:{},
  isDeleted:false,
  isUpdated:false,

};

const productsReducer = (state = initproducts, { type, payload }) => {
  switch (type) {
    case GET_ALLPRODUCTS:
      case ADMIN_PRODUCT_REQUEST:
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
      case ADMIN_PRODUCT_SUCCESS:
        return{
          loading:false,
          allproducts: payload,
        }
        case NEW_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
        product: payload.product,
      };
      case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted:payload,
      };
      case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: payload,
      };
    case GET_ALLPRODUCTS_FAIL:
      case ADMIN_PRODUCT_FAIL:
      case NEW_REVIEW_FAIL:  
      case NEW_PRODUCT_FAIL:
        case DELETE_PRODUCT_FAIL:
          case UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
      case NEW_PRODUCT_REQUEST:
      case NEW_REVIEW_REQUEST:
        case DELETE_PRODUCT_REQUEST:
          case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success:true,
      };
    
      
    case NEW_REVIEW_RESET:
      case NEW_PRODUCT_RESET:
      return {
        ...state,
        success: false,
      };
      case DELETE_PRODUCT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
      case UPDATE_PRODUCT_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    
    
    default:
      return state;
  }
};

export default productsReducer;



