import usersReducer from './reducers/usersReducer';
import productsReducer from './reducers/productsReducer';
import {combineReducers} from 'redux'
import productsDetailsReducer from './reducers/ProductsDetailsReducer'

const rootReducers = combineReducers({usersReducer,productsReducer,productsDetailsReducer})



export default rootReducers;