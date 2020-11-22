import React, {Component} from 'react';
import { Button, Modal ,ModalHeader , ModalBody, Label, Row, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


//-- functions to form validation parameters
//required - to check form input is  > 0 char, pass in val
const required = (val) =>  val && val.length;
//maxlength - pass in a length to check val
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentFormx extends Component {

    constructor(props){
        super(props); 

        this.state = {
            isModalOpen: false,
        };

        //bind methods in contructor
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //toggling the state when invoke to Modal
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
                {/* Submit comments form*/}
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
                                <Label htmlFor="yourname" md={12}>First Name*</Label>
                                <Col md={12}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
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


export default CommentFormx;

