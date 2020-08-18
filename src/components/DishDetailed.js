import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import CommentForm from './CommentForm';
import Loading from './LoadingComponent';

const dishDetailed = props => {

    let dishDetail = <div></div>

    if(props.isLoading) {
        dishDetail =
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
    }
    else if (props.errMess) {
        dishDetail = 
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>        
    }

    else if (props.dish !== undefined) {
        console.log(props.dish);
        dishDetail = 
        <div className='row'>
            <div className='col-12 col-md-5 m-1'>       
                <Card>
                    <CardImg width="100%" src={props.dish.image} alt={props.dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText>{props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className='col-12 col-md-5 m-1'>
                <h2>Comments</h2>
                { props.comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <ul className='list-unstyled'>
                                <p>{comment.comment}</p>
                                <p>--{comment.author} ,  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                            </ul>
                        </div>
                    );
                })}
                <CommentForm dishId={props.dish.id}
                    addComment={props.addComment} />
            </div>
        </div>
    } 

    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/home'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to='/menu'>Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.dish ? props.dish.name : null} </BreadcrumbItem>
            </Breadcrumb>
            {dishDetail}
        </div>
        
    );

} 


export default dishDetailed;