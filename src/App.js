import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';



class App extends Component{
  render() {
    return (
       <Router>
           <div className="App">
             <ul className="App-header">
               <li>
                 <Link to="/">Home</Link>
               </li>
               <li>
                 <Link to="/get">About</Link>
               </li>
               <li>
                 <Link to="/post">Contact</Link>
               </li>
             </ul>
             <Switch>
               <Route exact path='/' component={Home}></Route>
               <Route exact path='/about' component={About}></Route>
               <Route exact path='/contact' component={Contact}></Route>
             </Switch>
           </div>
       </Router>
   );
  }
}

export default App;
