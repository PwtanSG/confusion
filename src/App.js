import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuMedia from './components/MenuMediaComponent';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes'

class App extends Component {

  render(){
  return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
          </div>
        </Navbar>
        <MenuMedia />
      </div>
    );
  }
}

export default App;
