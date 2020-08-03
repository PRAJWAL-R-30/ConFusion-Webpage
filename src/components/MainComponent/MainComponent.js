import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Menu from '../Menu/Menu';
import { DISHES } from '../../container/Dishes/Dishes';
import DishDetailed from '../DishDetailed/DishDetailed';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomeComponent from '../HomeComponent/HomeComponent';

class MainComponent extends Component {

  state = {
    dishes: DISHES,
  }

  onDishSelect = (dishId) => {
    this.setState({selectedDish: dishId})
  }

  render () {

    const HomePage = () => {
      return (
        <HomeComponent />
      );
    }

    return (
      <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/menu" exact component={() => <Menu dishes={this.state.dishes} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />  
      </div>
    );
  }
} 

export default MainComponent;
