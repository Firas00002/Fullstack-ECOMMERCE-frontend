
import axios from 'axios'
import { ADD_TOCART, REMOVE_CART_ITEMS, SAVE_SHIPPING_INFO } from '../actionsTypes/cartActionsTypes';


// ADD To CART

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/allproducts/products/${id}`);
  
    dispatch({
      type: ADD_TOCART,
      payload: {
        product: data._id,
        name: data.name,
        price: data.price,
        image: data.images[0].url,
        stock: data.stock,
        quantity,
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };

// REMOVE TO CART
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEMS,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };

  // SAVE SHIPPING_INFO


  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };