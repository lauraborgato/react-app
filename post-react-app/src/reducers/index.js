import { combineReducers } from 'redux';
import { reducer as loginFormReducer } from 'redux-form';
import { loginReducer } from './userReducer';
import postReducer from './postsReducer';

export default combineReducers({
    user: loginReducer,
    form: loginFormReducer,
    posts: postReducer
});