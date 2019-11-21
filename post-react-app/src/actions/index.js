import backendApi from '../apis/backendApi';
import { LOGIN, SIGNIN, FETCH_POSTS, LOGOUT, ADD_POST } from './actionTypes';
import history from '../history';

export const fetchPosts = () => async dispatch => {

    const response = await backendApi.get('/posts');
    dispatch({ type: FETCH_POSTS, payload: response.data.posts })
};

export const createPost = (formValues) => async (dispatch, getState) => {
    const response = await backendApi.post('/api/posts', {
        ...formValues, userId: getState.user.userId
    });

    dispatch({ type: ADD_POST, payload: response.data });

    history.push('/');

}

export const loginUser = formValues => async dispatch => {
    console.log(formValues);
    const now = new Date();
    const response = await backendApi.post(`/user/login`, { ...formValues });
    const authData = {
        token: response.data.token,
        expirationDate: new Date(now.getTime() + response.data.expiresIn * 1000),
        userId: response.data.userId
    }
    dispatch({ type: LOGIN, payload: authData });

    history.push('/');
};

export const logOut = () => {
    return { type: LOGOUT };
}

export const singUp = (email, password) => async dispatch => {
    const response = await backendApi.post('user/singup', {
        email,
        password
    });
    dispatch({ type: SIGNIN, payload: response.data });
}