
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/components/layout/Header/Header';
import Footer from '../src/components/layout/Footer/Footer';
import Home from '../src/components/layout/Home/Home'

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import WorkSpace from './components/WorkSpace';
import ProductsDetails from './components/Products/ProductsDetails';




  


function App() {


  
  return (
    <>
    <div className="App">
      <Router>
        
        <Header />
        
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductsDetails} />
     
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signIn' component={SignIn} />
          <Route exact path='/workspace' component={WorkSpace} />
        </Switch>
        <Footer />
      </Router>
      
    </div>
    
    </>
  );
}

export default App;
