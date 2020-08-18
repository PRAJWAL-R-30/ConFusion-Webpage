import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

import Loading from './LoadingComponent';

function renderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }

    else {
        return (
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designaition ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    
}

export default renderCard;