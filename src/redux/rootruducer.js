import usersReducer from './reducers/usersReducer';
import productsReducer from './reducers/productsReducer';
import {combineReducers} from 'redux'
import productsDetailsReducer from './reducers/ProductsDetailsReducer'
import cartReducer from './reducers/cartReducer';
import ordersReducer from './reducers/ordersReducer'
import allUsersReducer from './reducers/allUsersReducer'

const rootReducers = combineReducers({usersReducer,productsReducer,productsDetailsReducer,cart:cartReducer,ordersReducer,allUsersReducer})



export default rootReducers;