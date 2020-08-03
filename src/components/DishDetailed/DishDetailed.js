import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const dishDetailed = props => {

    let dishDetail = <div></div>;
    const dish = props.dish;

    if (dish !== undefined) {
        dishDetail = <div className='row'>
        <div className='col-12 col-md-5 m-1'>
            <Card>
                <CardImg src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle style={{textAlign: 'left', fontSize: '20px'  }} >{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
        <div className='col-12 col-md-5 m-1'>
            <h2>Comments</h2>
            { dish.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <ul className='list-unstyled'>
                            <p>{comment.comment}</p>
                            <p>--{comment.author} ,  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                        </ul>
                    </div>
                );
            })}
        </div>
    </div>
    } 

    return (
        <div className="container">
            {dishDetail}
        </div>
        
    );

} 


export default dishDetailed;