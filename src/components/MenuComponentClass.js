import React, { Component } from  'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class MenuClass extends Component{

    constructor(props){
        super(props)
    }



    render(){
        {/* change to using props to pass dish information - see App.js passing props dishes*/}
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=> this.props.onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>	
                <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                </Card>       
              </div>
            );
        });


        return (    
        <div className="container">
          <div className="row">
              {menu}
          </div>
        </div>
        )
    }  
        
}
export default MenuClass;