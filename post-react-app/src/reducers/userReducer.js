import { LOGIN, LOGOUT, SIGNIN } from '../actions/actionTypes';

export default (state = null, action) => {
    switch (action.type) {
        case LOGIN: {
            return { ...state, ...action.payload };
        }
        case LOGOUT:
        case SIGNIN: {
            return null;
        }
    
        default:
            return state;
    }
}