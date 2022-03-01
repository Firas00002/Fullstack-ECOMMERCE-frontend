import thunk from 'redux-thunk' 
import rootReducers from './rootruducer';
import { createStore, compose, applyMiddleware } from "redux";




const devtools=  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



const store =createStore(rootReducers,compose(applyMiddleware(thunk),devtools));



 





export default  store ;