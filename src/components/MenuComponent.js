import React, { Component } from  'react';
import { Media } from 'reactstrap';
import { Card } from 'react-bootstrap';

class Menu extends Component{

    constructor(props){
        super(props)

        this.state = {
            selectedDish: null
        };

    }

    onDishSelect(dish){
      this.setState({ selectedDish:dish });	
    }

    renderDish(dish){
      if (dish != null){
        return(
          <Card>
          <Card.Body>
            <Card.Img width = "50%" variant="top" src={dish.image} alt={dish.name}/>
            <Card.Title>{dish.id} : {dish.name}</Card.Title>
            <Card.Text>{dish.description}</Card.Text>
          </Card.Body>
          </Card>
        );
      }else {
        return(
          <div></div>
        );	
     
     
      }
     }

    render(){
        {/* change to using props to pass dish information - see App.js passing props dishes*/}
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-sm m-1">
                <Card onClick={() => {this.onDishSelect(dish)}}>
                <Card.Body>
                  <Card.Img variant="top" src={dish.image} alt={dish.name}/>
                  <Card.Title>{dish.id} : {dish.name}</Card.Title>
                  <Card.Text>USD$:{dish.price}</Card.Text>
                </Card.Body>
                </Card>
              </div>
            );
        });


        return (    
        <div className="container">
          <div className="row">
              {menu}
          </div>
          <div className="row">
             {this.renderDish(this.state.selectedDish)}	
          </div>  
        </div>
        )
    }  
        
}
export default Menu;