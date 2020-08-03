import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


const menu = props => {
    const menu = props.dishes.map(dish => {
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <Card onClick={() => props.clicked(dish.id)}>
                    <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
                    <CardImgOverlay className='ml-5'>
                        <CardTitle style={{textAlign: 'left', fontSize: '20px'  }} >{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    })

    return (
        <div className='container'>
            <div className='row'>
                {menu}
            </div>
    </div>
    );
} 

export default menu;