import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './loginForm';
import { loginUser } from '../actions';

class Login extends React.Component {
    
    onSubmit = (formValues) => {
        this.props.loginUser(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <LoginForm onSubmit={this.onSubmit} labelButton="Login"></LoginForm>
            </div>
        );
    }
}

export default connect(null, { loginUser })(Login);