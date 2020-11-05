import React, { Component } from  'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props)

        this.state = {

        };

    }


    renderComments(dishComments) {
      if(dishComments == null) {
          return (
              <div>
              </div>
          )
      }
      else {
          const comment = dishComments.map((eachComment) => {
              return (
              <div>
                  <li>{eachComment.comment}</li><br />
                  <li>-- {eachComment.author}, {eachComment.date}</li><br />
              </div>
              )

          }
          );
          return (
              <ul className="list-unstyled">
                  {comment}
              </ul>
          )
      }
  }

    render(){

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
                    <h4>Comments</h4>
                    {this.renderComments(this.props.dishSelected.comments)}
            </div>
          </div>
        </div>
        )
    } 

}
export default DishDetail;