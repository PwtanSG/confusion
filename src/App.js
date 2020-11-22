import React, { Component } from 'react'
//import { Navbar, NavbarBrand } from 'reactstrap';
//import MenuMedia from './components/MenuMediaComponent';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
//import {DISHES} from './shared/dishes'
//import DishDetail from './components/DishdetailComponent';


const store = ConfigureStore();

class App extends Component {

  render(){
  return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />        
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
