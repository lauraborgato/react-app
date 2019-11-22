import React from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }
    renderInput = ({ input, label, meta, type }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className="field">
                <label className={className}>
                    {label}
                    <input {...input} autoComplete="off" type={type} />
                    {this.renderError(meta)}
                </label>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="email" component={this.renderInput} label="Email" type="email" />
                <Field name="password" component={this.renderInput} label="Password" type="password" />
                <button className="ui button primary">{this.props.labelButton}</button>
            </form>
        );
    }
}

const validate = formValues => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const errors = {};
    if (!formValues.email) {
        errors.email = 'You must enter an Email';
    } else if (!re.test(formValues.email)) {
        errors.email = 'You must enter a valid Email';
    }

    if (!formValues.password) {
        errors.password = 'You must enter a password';
    } else if (formValues.password.length < 6) {
        errors.password = 'You must enter a password with more than six chars';
    }
    return errors;
};


export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm);