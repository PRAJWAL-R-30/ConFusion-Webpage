import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from './Menu';
import DishDetailed from './DishDetailed';
import Header from './Header';
import Footer from './Footer';
import HomeComponent from './HomeComponent';
import Contact from './Contact'; 
import About from './About';
import { addComment, fetchDishes } from '../Redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
})

class MainComponent extends Component {

  onDishSelect = (dishId) => {
    this.setState({selectedDish: dishId})
  }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render () {

    const HomePage = () => {
      return (
        <HomeComponent 
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetailed 
          dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          addComment={this.props.addComment} />
      );
    }

    return (
      <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/aboutus" exact component={() => <About leaders={this.props.leaders} />} />
        <Route path="/menu" exact component={() => <Menu dishes={this.props.dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route path="/contactus" exact component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />  
      </div>
    );
  }
} 



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
