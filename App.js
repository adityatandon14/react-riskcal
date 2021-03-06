import React from 'react';

import './App.css';
import About from './About';
import Login from './Login';

import Calculator from './Cal/Calculator';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path='/' component={About}></Route> 
      <Route exact path='/about' component={About}></Route> 
      <Route exact path='/login' component={Login}></Route> 
      <Route exact path='/calculator' component={Calculator}></Route> 
    </Switch>
            
            
     
     </div>
     
     </Router>
  );
}

export default App;
