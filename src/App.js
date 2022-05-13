
import './App.css';
import React from "react";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


function App() {
  return (
   


    <Router>
      <div className="App">
      <Header/>
        <Switch>
        {/* <Route exactpath ="/" component={Home}/> */}

        

        <Route path="/checkout" component={Checkout}/>
        
        
        <Route exact="/" component={Home}/>
        
        </Switch>
      </div>
    </Router>
 );
}

export default App;
