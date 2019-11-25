import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './loginForm';
import { loginUser } from '../actions';

const Login = props => {
    return (
        <div>
            <h3>LogIn</h3>
            <LoginForm onSubmit={props.loginUser} labelButton="Login"></LoginForm>
        </div>
    );
}

export default connect(null, { loginUser })(Login);