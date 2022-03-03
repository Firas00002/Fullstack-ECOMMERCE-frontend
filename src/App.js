
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/components/layout/Header/Header';
import Footer from '../src/components/layout/Footer/Footer';
import Home from '../src/components/layout/Home/Home'


import ProductsDetails from './components/Products/ProductsDetails';
import Products from './components/Products/Products';
import Search from './components/Products/Search';
import store from './redux/store'

import Account from './components/User/Account';
import { useEffect } from 'react';
import { getProfile } from './redux/actions/usersActions';
import UserOptions from './components/layout/Header/UserOptions';
import { useSelector } from 'react-redux';
import Login from './components/User/Login';
import Register from './components/User/Register';
import ProductedRoute from '../src/components/Route/ProtectedRoute'
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import Payement from './components/Cart/Payement';
import OrderSuccess from './components/Cart/OrderSuccess';
import MyOrders from './components/Order/MyOrders';








  


function App() {
  const {isAuth,users}=useSelector(state=>state.usersReducer)

  
  
  useEffect(() => {
    store.dispatch(getProfile())
  }, [])
  


  
  return (
    <>
    <div className="App">
      <Router>
        
        <Header />

        {isAuth && <UserOptions users={users}/>}
        
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductsDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProductedRoute exact path="/account" component={Account} />
        <Route exact path="/cart" component={Cart} />
        <ProductedRoute exact path="/shipping" component={Shipping} />
        <ProductedRoute exact path="/order/confirm" component={ConfirmOrder} />
        <ProductedRoute exact path="/process/payment" component={Payement} />
        <ProductedRoute exact path="/success" component={OrderSuccess} />
        <ProductedRoute exact path="/orders" component={MyOrders} />
          
        </Switch>
        <Footer />
      </Router>
      
    </div>
    
    </>
  );
}

export default App;
