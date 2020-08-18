import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Row, Label } from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';
import { Connect } from 'redux';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    state = {
        isModalOpen: false,
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });  
    }

    submitHandler = (values) => {
        this.toggleModal();
        console.log(values);
        this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);

    } 
    

    render () {
        return (
            <div>
                <Button onClick={this.toggleModal}>
                    <span>Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <h2></h2>
                        <LocalForm onSubmit={(values) => this.submitHandler(values)}>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" id="rating" name="rating"
                                className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                            </Control.select>  
                            <br />

                            <Label htmlFor="name">Your Name</Label>
                            <Control.text model=".name" id="name" name="name"
                                placeholder="Your Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            /> 
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required: 'Required! ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be lesser than 15 characters',
                                }}    
                            /> 
                                                            
                            <br />

                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" id="comment" name="comment"
                                rows="12"
                                className="form-control"
                            />
                            <br />

                            <Button type="submit" color="primary">
                                    Submit
                            </Button> 
                                
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;
