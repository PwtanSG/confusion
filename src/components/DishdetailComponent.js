import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
        Button, Modal ,ModalHeader , ModalBody, Label, Row, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
// import CommentForm from './CommentFormComponent';

//-- functions to form validation parameters
//required - to check form input is  > 0 char, pass in val
const required = (val) =>  val && val.length;
//maxlength - pass in a length to check val
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    class CommentForm extends Component {
        constructor(props){
            super(props); 
    
            this.state = {
                isModalOpen: false,
            };
    
            //bind methods in contructor
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        //toggling the state of modal
        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
        }
    
        handleSubmit(values){
            alert('You submitted comments : ' + JSON.stringify(values));
        }
        
        render(){
            return(
                <div>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span> Submit Comments</Button>
                    {/* Dish comments form*/}
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comments</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                {/*Rating Field */}
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={12}>Rating</Label>
                                    <Col md={12}>
                                        <Control.select model=".rating" name="rating"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                {/*Name Field */}
                                <Row className="form-group">
                                    <Label htmlFor="author" md={12}>First Name*</Label>
                                    <Col md={12}>
                                        <Control.text model=".author" id="author" name="author"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                             />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                required: 'Required.',
                                                minLength: 'Must be greater than 2 characters.',
                                                maxLength: 'Must be 15 characters or less.'
                                            }}
                                         />
                                    </Col>
                                </Row>
                                {/*Comments textarea*/}
                                <Row className="form-group">
                                    <Label htmlFor="comment" md={12}>Comment</Label>
                                    <Col md={12}>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            rows="6"
                                            className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={12}>
                                        <Button type="submit" color="primary">
                                        Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }  
    };


    function RenderComments({comments}){
        if (comments != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment)=>{
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p><br />
                                </li>         
                            );
                        })}
                    </ul>
                    <CommentForm />
                </div>
            );
        else
            return(
                <div>5{comments}</div>
            );
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

        <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>	
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>

        </div>
        )
    } 

    const DishDetail = (props) => {
        //console.log(props)
        console.log(props.dish)
        return (
          <div className="container">
             <div className="row">
                <Breadcrumb>
                  <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                  <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>                    
                <div className="col-12">
                  <h3>{props.dish.name}</h3>
                  <hr />
                </div>
            </div>         
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} />
                
            </div>
          </div>
        );
    }

export default DishDetail;