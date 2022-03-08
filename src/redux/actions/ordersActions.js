import axios from "axios";
import { ALL_ORDERS_FAIL, ALL_ORDERS_REQUEST, ALL_ORDERS_SUCCESS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, DELETE_ORDER_FAIL, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, MY_ORDERS_FAIL, MY_ORDERS_REQUEST, MY_ORDERS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, UPDATE_ORDER_FAIL, UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS } from "../actionsTypes/orderActionsTypes";





// Create Order
export const createOrder = (orders) => async (dispatch) => {

  let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
      }
  
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    

    
    const { data } = await axios.post("/allorders/order/new", orders,config);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response.data,
    });
  }
};
  

  // My Orders
export const myOrders = () => async (dispatch) => {
  let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
      }
  dispatch({ type: MY_ORDERS_REQUEST });
 
    try {
      
  
      const { data } = await axios.get("/allorders/orders/me",config);
  
      dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
    } catch (error) {
      dispatch({
        type: MY_ORDERS_FAIL,
        payload: error.response.data,
      });
    }
  };


  // Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {
  let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
      }
      dispatch({ type: ORDER_DETAILS_REQUEST });
  try {
    

    const { data } = await axios.get(`/allorders/order/${id}`,config);

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data,
    });
  }
};


// Get All Orders (admin)
export const getAllOrders = () => async (dispatch) => {
  let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
      }
      dispatch({ type: ALL_ORDERS_REQUEST });

  try {
    
    const { data } = await axios.get("/allorders/admin/orders",config);

    dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: ALL_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};



// Update Order
export const updateOrder = (id, order) => async (dispatch) => {
  let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
      }
      dispatch({ type: UPDATE_ORDER_REQUEST });

  try {
    
    
    const { data } = await axios.put(
      `/allorders/admin/order/${id}`,
      order,
      config
    );

    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_FAIL,
      payload: error.response.data
    });
  }
};

// Delete Order
export const deleteOrder = (id) => async (dispatch) => {
  let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
      }
dispatch({ type: DELETE_ORDER_REQUEST });
  try {
    

    const { data } = await axios.delete(`/allorders/admin/order/${id}`,config);

    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload: error.response.data
    });
  }
};
