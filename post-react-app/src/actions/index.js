import _ from 'lodash'
import backendApi from '../apis/backendApi';
import { LOGIN, SIGNIN, FETCH_POSTS } from './actionTypes';
import history from '../history';

export const fetchPosts = () => async dispatch => {

    const response = await backendApi.get('/posts');

    dispatch({ type: FETCH_POSTS, payload: response.data.posts })
};

export const loginUser = formValues => async dispatch => {
    const response = await backendApi.post(`/user/login`, { ...formValues });

    dispatch({ type: LOGIN, payload: response.data });
    history.push('/');
};

export const singUp = (email, password) => async dispatch => {
    const response = await backendApi.post('user/singup', {
        email,
        password
    });
    dispatch({ type: SIGNIN, payload: response.data });
}