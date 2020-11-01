import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuMedia from './components/MenuMediaComponent';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes'
import DishDetail from './components/DishdetailComponent';

class App extends Component {

  constructor(props){
    super(props);

    {/* dishes information from the dishes.js */}
    this.state = {
      dishes: DISHES
    };
  }

  render(){
  return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">App js resturant </NavbarBrand>
          </div>
        </Navbar>
        {/* change to using props to pass dish information */}
        <Menu dishes={this.state.dishes}/>
        
      </div>
    );
  }
}

export default App;
