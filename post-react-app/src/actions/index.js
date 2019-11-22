import FormData from 'form-data';
import backendApi from '../apis/backendApi';
import { LOGIN, SIGNIN, FETCH_POSTS, LOGOUT, ADD_POST, EDIT_POST } from './actionTypes';
import history from '../history';

export const fetchPosts = () => async dispatch => {

    const response = await backendApi.get('/posts');
    dispatch({ type: FETCH_POSTS, payload: response.data.posts })
};

export const createPost = (formValues) => async (dispatch, getState) => {
    const postData = getPostData(formValues);

    const response = await backendApi.post('/posts', postData, { headers: { 'Authorization': `Bearer ${getState().user.token}` } });
    dispatch({ type: ADD_POST, payload: response.data.post._doc });

    history.push('/');
}

export const editPost = (id, formValues) => async (dispatch, getState) => {
    let postData;
    if (typeof (formValues.postImage) === 'object') {
        postData = getPostData(formValues);
        postData.append('id', id);
    } else {
        postData = {
            id: id,
            postTitle: formValues.postTitle,
            postContent: formValues.postContent,
            imagePath: formValues.postImage,
            userId: null
        };
    }
    const response = await backendApi.put(`/posts/${id}`, postData, { headers: { 'Authorization': `Bearer ${getState().user.token}` } });
    dispatch({ type: EDIT_POST, payload: response.data.post });

    history.push('/');
}

export const loginUser = formValues => async dispatch => {
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
    return { type: LOGOUT, payload: null };
}

export const signUp = ({email, password}) => async dispatch => {
    await backendApi.post('user/singup', {
        email, password
    });
    history.push('/login');

    dispatch({ type: SIGNIN });
}

const getPostData = (formValues) => {
    const postData = new FormData();
    postData.append('postTitle', formValues.postTitle);
    postData.append('postContent', formValues.postContent);
    /**
     * the three paramas is for axios to parse the image to a binary
     */
    postData.append('action', 'ADD');
    postData.append('param', 0);
    postData.append('secondParam', 0);
    postData.append('postImage', formValues.postImage, formValues.postTitle);
    return postData;
}