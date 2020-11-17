import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
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
    const myDishId = 0
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} 
          onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dishSelected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
     </div>
    );
  }
}

export default Main;