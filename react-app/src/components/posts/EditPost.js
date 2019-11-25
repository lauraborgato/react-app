import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts, editPost } from '../../actions';
import PostForm from './postForm';

class EditPost extends React.Component {
    componentDidMount() {
        this.props.fetchPosts(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editPost(this.props.match.params.id, formValues);
    }

    render() {
        console.log('render edit');
        if (!this.props.post) {
            return <div>Loading....</div>
        }
        return (
            <div>
                <h3>Edit a Post</h3>
                <PostForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.post, 'postTitle', 'postContent', 'imagePath')}></PostForm>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { post: state.posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPosts, editPost })(EditPost);