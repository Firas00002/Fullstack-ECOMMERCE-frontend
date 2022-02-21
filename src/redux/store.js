import thunk from 'redux-thunk' 
import rootReducers from './rootruducer';
import { createStore, compose, applyMiddleware } from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage
};


const devtools=  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



const persistor =createStore(rootReducers,compose(applyMiddleware(thunk),devtools));


const persistedReducer = persistReducer(persistConfig, rootReducers);
 
// const store = createStore(persistedReducer, compose(applyMiddleware(thunk),devtools));
 
// const persistor = persistStore(store);



export default  persistor ;