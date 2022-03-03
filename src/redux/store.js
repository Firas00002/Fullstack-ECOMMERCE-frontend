import thunk from 'redux-thunk' 
import rootReducers from './rootruducer';
import { createStore, compose, applyMiddleware } from "redux";




const devtools=  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
let initialState = {
    cart: {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
        shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
  };



const store =createStore(rootReducers,initialState,compose(applyMiddleware(thunk),devtools));



 





export default  store ;