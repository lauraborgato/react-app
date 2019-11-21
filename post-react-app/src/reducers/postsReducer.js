import { FETCH_POSTS } from '../actions/actionTypes';
import _ from 'lodash';

export default (state = [], action) => {
    switch (action.type){
        case FETCH_POSTS: {
            return {...state, ..._.mapKeys(action.payload, '_id')};
        }
        default:
            return state;
    }
}