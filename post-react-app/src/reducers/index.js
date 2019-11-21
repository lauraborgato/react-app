import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './userReducer';
import postReducer from './postsReducer';

export default combineReducers({
    user: authReducer,
    form: formReducer,
    posts: postReducer
});