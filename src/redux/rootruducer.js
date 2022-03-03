import usersReducer from './reducers/usersReducer';
import productsReducer from './reducers/productsReducer';
import {combineReducers} from 'redux'
import productsDetailsReducer from './reducers/ProductsDetailsReducer'
import cartReducer from './reducers/cartReducer';
import { myOrdersReducer, newOrderReducer } from './reducers/ordersReducer';

const rootReducers = combineReducers({usersReducer,productsReducer,productsDetailsReducer,cart:cartReducer,newOrders:newOrderReducer,myOrders:myOrdersReducer})



export default rootReducers;