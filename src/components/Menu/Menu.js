import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {

    

    render () {

        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.props.clicked(dish.id)}>
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
} 

export default Menu;