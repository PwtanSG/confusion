import React, { Component } from 'react'
//import { Navbar, NavbarBrand } from 'reactstrap';
//import MenuMedia from './components/MenuMediaComponent';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
//import {DISHES} from './shared/dishes'
//import DishDetail from './components/DishdetailComponent';

class App extends Component {

  render(){
  return (
      <BrowserRouter>
        <div>
          <Main />        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
