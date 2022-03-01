
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/components/layout/Header/Header';
import Footer from '../src/components/layout/Footer/Footer';
import Home from '../src/components/layout/Home/Home'


import ProductsDetails from './components/Products/ProductsDetails';
import Products from './components/Products/Products';
import Search from './components/Products/Search';
import store from './redux/store'
import SignUp from './components/User/SignUp';
import Account from './components/User/Account';
import { useEffect } from 'react';
import { getProfile } from './redux/actions/usersActions';
import UserOptions from './components/layout/Header/UserOptions';
import { useSelector } from 'react-redux';








  


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
        <Route exact path="/login" component={SignUp} />
        <Route exact path="/account" component={Account} />
          
        </Switch>
        <Footer />
      </Router>
      
    </div>
    
    </>
  );
}

export default App;
