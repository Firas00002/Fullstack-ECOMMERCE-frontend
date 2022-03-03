import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDERS_FAIL, MY_ORDERS_REQUEST, MY_ORDERS_SUCCESS } from "../actionsTypes/orderActionsTypes";



const init={
    loading:false,
    orders:null,
    errors:null
}
const orders={
    loading:false,
    orders:[],
    errors:null
}



export const newOrderReducer = (state = init, {type,payload}) => {
    switch (type) {
      case CREATE_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case CREATE_ORDER_SUCCESS:
        return {
          loading: false,
          order: payload,
          errors: null
        };
  
      case CREATE_ORDER_FAIL:
        return {
          loading: false,
          error: payload,
        };
      
  
      default:
        return state;
    }
  };



  export const myOrdersReducer = (state = orders, {type,payload}) => {
    switch (type) {
      case MY_ORDERS_REQUEST:
        return {
          loading: true,
        };
  
      case MY_ORDERS_SUCCESS:
        return {
          loading: false,
          orders: payload,
        };
  
      case MY_ORDERS_FAIL:
        return {
          loading: false,
          error: payload,
        };
     
  
      default:
        return state;
    }
  };