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
import { postComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


//redux, exported withRouter(connect(mapStateToProps)
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    feedback: state.feedback
  }
}

// to add comments. Redux mapDispatchToProps is allowed from last code of export 
const mapDispatchToProps = dispatch => ({  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),
  
  fetchDishes: () =>  {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders())   //fetch is in Action Creators
  
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
      this.props.fetchLeaders();
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
              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leadersLoading={this.props.leaders.isLoading}
              leadersErrMess={this.props.leaders.errMess}
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
        postComment={this.props.addComment} 
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
        />
      );
    }

    return (
      <div>
        <Header />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={500}>
              <Switch location={this.props.location}>
                <Route exact path="/" component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} 
                              leadersLoading={this.props.leaders.isLoading}
                              leadersErrMess={this.props.leaders.errMess}
                />} />
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/> }/>
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route exact path='/contactus' component={() => <Contact 
                              resetFeedbackForm={this.props.resetFeedbackForm} 
                              postFeedback={this.props.postFeedback}
                              />} />
                <Route to="/home" />
              </Switch>
            </CSSTransition>
        </TransitionGroup>
        <Footer />
     </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));