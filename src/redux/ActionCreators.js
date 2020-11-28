import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

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

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
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