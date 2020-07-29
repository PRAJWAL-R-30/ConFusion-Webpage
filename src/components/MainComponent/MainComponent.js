import React, { Component } from 'react';
import { Navbar, NavbarBrand,} from 'reactstrap';

import Menu from '../Menu/Menu';
import { DISHES } from '../../container/Dishes/Dishes';
import DishDetailed from '../DishDetailed/DishDetailed';

class MainComponent extends Component {

  state = {
    dishes: DISHES,
    selectedDish: null,
  }

  onDishSelect = (dishId) => {
    this.setState({selectedDish: dishId})
  }

  render () {
    return (
      <div className="App">
      <Navbar dark color='primary'>
        <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
      </Navbar>
      <Menu dishes={this.state.dishes}
        clicked={(dishId) => this.onDishSelect(dishId)} />
      <DishDetailed 
        dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    </div>
    );
  }
} 

export default MainComponent;
