import { FETCH_POSTS, ADD_POST, EDIT_POST } from '../actions/actionTypes';
import _ from 'lodash';

export default (state = [], action) => {
    switch (action.type){
        case FETCH_POSTS: {
            return {...state, ..._.mapKeys(action.payload, '_id')};
        }
        case ADD_POST:
        case EDIT_POST:{
            return { ...state, [action.payload._id]: action.payload };
        }
        default:
            return state;
    }
}