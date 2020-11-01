import React, { Component } from  'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props)

        this.state = {

        };

    }

    onDishSelected(dish){
        
      }
  
      renderDishSelected(dish){
        if (dish != null){
          return(
         
            <div>detail</div>
          );
        }else {
          return(
            <div></div>
          );	
        }
       }

    render(){

        const dishComments = this.props.dishSelected.comments.map((dishComment)=>{
          return(
            <div>
              <br></br>
              <CardText>{dishComment.id}-{dishComment.comment}</CardText>
              <CardText>--{dishComment.author}-{dishComment.date}</CardText>
            </div>
          
          )
        });

        return (    
        <div className="container">

          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
              <CardImg width="100%" src={this.props.dishSelected.image} alt={this.props.dishSelected.name}/>	
              <CardBody>
              <CardTitle>{this.props.dishSelected.name}</CardTitle>
              <CardText>{this.props.dishSelected.description}</CardText>
              </CardBody>
              </Card>
            </div>

            <div className="col-12 col-md-5 m-1">
              <Card>
              <CardBody>
              <CardTitle>Comments</CardTitle>
              {dishComments}
              </CardBody>
              </Card>
            </div>
          </div>
        </div>
        )
    } 

}
export default DishDetail;