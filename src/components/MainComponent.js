import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


//redux, exported withRouter(connect(mapStateToProps)
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

// to add comments. Redux mapDispatchToProps is allowed from last code of export 
const mapDispatchToProps = dispatch => ({  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () =>  {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

class Main extends Component {

  constructor(props) {
    super(props);

  }

  // Use Lifecycle method - call right after this Main component mounted into view, fetch the dishes data
  // via mapDispatchToProps Redux store dispatch
  componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    console.log(dishId)
  }
  

  
  render() {
    //const myDishId = 0;
    const HomePage = () => {
      return (
        <Home 
              //for dish on homepage take in props
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              
              //for promotion on homepage takes in props
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}

              //for leader on homepage take in props
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    
    // it receives a `match` prop, which it
    const DishWithId = ({match}) => {
       {/* Using the filter */}
      return(
        
        //Dish detail pass in props
        <DishDetail 
        dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}

        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
        addComment={this.props.addComment} 
        commentsErrMess={this.props.comments.errMess}
        addComment={this.props.addComment}
        />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/> }/>
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path='/contactus' component={() => <Contact 
                        resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route to="/home" />
        </Switch>
        <Footer />
     </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));