import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './loginForm';
import { signUp } from '../actions';

const SignUp = props => {
    return (
        <div>
            <h3>Sign Up</h3>
            <LoginForm onSubmit={props.signUp} labelButton="Sing Up"></LoginForm>
        </div>
    );
}

export default connect(null, { signUp })(SignUp);