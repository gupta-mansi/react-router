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
                 <Link to="/">Login</Link>
               </li>
               <li>
                 <Link to="/get">Get</Link>
               </li>
               <li>
                 <Link to="/post">Post</Link>
               </li>
             </ul>
             <Switch>
               <Route exact path='/' component={Login}></Route>
               <Route exact path='/get' component={Get}></Route>
               <Route exact path='/post' component={Post}></Route>
             </Switch>
           </div>
       </Router>
   );
  }
}

export default App;
