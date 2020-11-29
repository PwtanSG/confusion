import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

//main component will call this addComment with the 4 parameters
export const addComment = (dishId, rating, author, comment) => ({
        //returning an js object in side the arrow function curly brackets
        //actiontype.ADD_COMMENT this is to be send and add into the comments.js
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }

}); 


// ---------- For Dishes --------------
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));                  // indicate loading see below dishesloading

    //For simulating 2s delay
    //setTimeout(() => {
    //    dispatch(addDishes(DISHES));
    //}, 2000);

    return fetch(baseUrl + 'dishes')
    .then(response => response.json())              //convert to json
    .then(dishes => dispatch(addDishes(dishes)));   //callback to push dispatch via redux
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


// ---------- For Comments --------------
export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});



// ---------- For Promotions --------------
export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});