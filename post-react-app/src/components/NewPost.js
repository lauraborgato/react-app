import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import PostForm from './postForm';

class PostCreate extends React.Component {
    
    onSubmit = (formValues) => {
        this.props.createPost(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Post</h3>
                <PostForm onSubmit={this.onSubmit}></PostForm>
            </div>
        );
    }
}

export default connect(null, { createPost })(PostCreate);