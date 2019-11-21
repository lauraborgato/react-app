import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
    }

    adaptFileEventToValue = delegate => e => {
        if(e.target.files.length > 0){
            this.setState({
                file: URL.createObjectURL(e.target.files[0])
            }); 
            delegate(e.target.files[0]);
        }
    };

    FileInput = ({
        input: { value: omitValue, onChange, onBlur },
        meta: omitMeta,
        ...props
    }) => {
        return (
            <input
                onChange={this.adaptFileEventToValue(onChange)}
                onBlur={this.adaptFileEventToValue(onBlur)}
                type="file"
                {...props.input}
                {...props}
            />
        );
    };

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
        console.log(formValues);
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" encType="multipart/form-data">
                <Field name="title" component={this.renderInput} label="Enter Title" type="text" />
                <Field name="description" component={this.renderInput} label="Enter Description" type="text" />
                <img src={this.state.file} className="ui big image"/>
                <Field name="attachment" component={this.FileInput} type="file" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.constent) {
        errors.constent = 'You must enter a constent';
    }

    return errors;
};

export default reduxForm({
    form: 'postForm',
    validate
})(PostForm);