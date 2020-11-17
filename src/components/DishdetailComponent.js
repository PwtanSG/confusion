import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';



function RenderComments({dish}){
    if(dish == null) {
            return (
                <div>
                </div>
            )
    }
    else {
        const comment = dish.comments.map((eachComment) => {
            return (
            <div>
                <li>{eachComment.comment}</li><br />
                <li>-- {eachComment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(eachComment.date)))}</li><br />
            </div>
            )

        }
        );
        return (
            <div className="container">
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comment}
                    </ul>
                </div>
            </div>
        )
    }
} 

    function RenderDish({dish}){
        //const dish = this.props.dishSelected;
        if (dish == null) {
            return (
                <div>
                </div>
            )
        }

        return (    
        <div className="container">

          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name}/>	
              <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
              </CardBody>
              </Card>
            </div>
          </div>
        </div>
        )
    } 

    const DishDetail = (props) => {
        //console.log(props.dishSelected.name)
        return (
            <div>
                <RenderDish dish={props.dishSelected} />
                <RenderComments dish={props.dishSelected} />

            </div>
        );
    }

export default DishDetail;