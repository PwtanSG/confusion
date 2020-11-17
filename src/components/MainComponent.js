import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        //selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    console.log(dishId)
    //const result = this.state.dishes.filter(dishx => dishx.id === this.state.selectedDish);
    //const result = this.state.dishes.filter(dishx => dishx.id === this.state.selectedDish);
    //const result=this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0];
    //console.log(result)
  }
  

  
  render() {
    //const myDishId = 0;
    const HomePage = () => {
      return (
        <Home />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/> }/>
          <Route to="/home" />
        </Switch>
        <Footer />
     </div>
    );
  }
}

export default Main;