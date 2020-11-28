import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        //when there is ActionType that add comments
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length; //derive the next id for the newly added comments based on the length of comment array
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment); //concate with new comments

        default:
          return state;
      }
}