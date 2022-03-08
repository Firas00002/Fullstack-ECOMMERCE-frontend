import { ALL_ORDERS_FAIL, ALL_ORDERS_REQUEST, ALL_ORDERS_SUCCESS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, DELETE_ORDER_FAIL, DELETE_ORDER_REQUEST, DELETE_ORDER_RESET, DELETE_ORDER_SUCCESS, MY_ORDERS_FAIL, MY_ORDERS_REQUEST, MY_ORDERS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, UPDATE_ORDER_FAIL, UPDATE_ORDER_REQUEST, UPDATE_ORDER_RESET, UPDATE_ORDER_SUCCESS } from "../actionsTypes/orderActionsTypes";









const init = {
  loading: false,
  errors: null,
  orders: null,
  myOrder:{},
  isUpdated:false,
  isDeleted:false
  
  
  
};

const ordersReducer = (state = init, { type, payload }) => {
  switch (type) {
    case CREATE_ORDER_REQUEST:
      case MY_ORDERS_REQUEST:
        case ORDER_DETAILS_REQUEST:
          case ALL_ORDERS_REQUEST:
            case UPDATE_ORDER_REQUEST:
    case DELETE_ORDER_REQUEST:
     
        
      return {
        ...state,
        loading: true,
        
      };
    case CREATE_ORDER_SUCCESS:
      
      return {
        ...state,
        loading: false,
        orders: payload,
        errors: null,
        
      };

      case ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        myOrder: payload,
        errors: null,
        
      };
      
      case MY_ORDERS_SUCCESS:
        case ALL_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: payload,
        errors: null,
        
      };
      case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: payload,
      };

    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: payload,
      };

      case UPDATE_ORDER_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case DELETE_ORDER_RESET:
      return {
        ...state,
        isDeleted: false,
      };
      
      
    case CREATE_ORDER_FAIL:
      case MY_ORDERS_FAIL:
        case ORDER_DETAILS_FAIL:
          case ALL_ORDERS_FAIL:
            case UPDATE_ORDER_FAIL:
    case DELETE_ORDER_FAIL:
      return{
        ...state,
        loading: false,
        errors: payload,
        
      }
      
    default:
      return state;
  }
};

export default ordersReducer;





