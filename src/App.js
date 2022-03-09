
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
import OrderDetails from './components/Order/OrderDetails';
import Dashboard from './components/admin/Dashboard';
import ProductList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';
import UpdateProduct from './components/admin/UpdateProduct';
import OrderList from './components/admin/OrderList';
import ProcessOrder from './components/admin/ProcessOrder';
import UsersList from './components/admin/UsersList';
import UpdateUser from './components/admin/UpdateUser';
import Contact from './components/layout/Contact/Contact';








  


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

        {isAuth && <UserOptions user={users}/>}
        
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductsDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={Contact} />
        <ProductedRoute exact path="/account" component={Account} />
        <Route exact path="/cart" component={Cart} />
        <ProductedRoute exact path="/shipping" component={Shipping} />
        <ProductedRoute exact path="/order/confirm" component={ConfirmOrder} />
        
          <ProductedRoute exact path="/process/payment" component={Payement} />
        
      
        <ProductedRoute exact path="/success" component={OrderSuccess} />
        <ProductedRoute exact path="/orders" component={MyOrders} />
        <ProductedRoute exact path="/order/:id" component={OrderDetails} />
        <ProductedRoute isAdmin={true} exact path="/admin/dashboard" component={Dashboard} />
        <ProductedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProductedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />
        <ProductedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProductedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />
        <ProductedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />


<ProductedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />
        <ProductedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />


        </Switch>
        <Footer />
      </Router>
      
    </div>
    
    </>
  );
}

export default App;
