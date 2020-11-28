import * as ActionTypes from './ActionTypes';

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