import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../../Modal';
import history from '../../history';
import { fetchPosts, deletePost } from '../../actions/index';

class PostDelete extends React.Component {
    componentDidMount() {
        this.props.fetchPosts(this.props.match.params.id);
    }
    renderActions() {
        return (
            //fragment is like a div it is not rendered in screen
            // yo can use <></> as well (quality checkers view this as incorrect)
            <React.Fragment>
                <button className="ui button negative" onClick={() => this.props.deletePost(this.props.match.params.id)}>
                    Delete
                </button>
                <Link className="ui button" to='/'>Cancel</Link>
            </React.Fragment>
        );
    }
    renderContent() {
        if (!this.props.post) {
            return 'Are you sure you want to delete this Post?'
        } else {
            return `Are you sure you want to delete this Post with title: '${this.props.post.postTitle}'?`
        }
    }
    render() {
        console.log(this.props);
        return (
            <Modal
                title="Delete Post"
                onDismiss={() => { history.push('/') }}
                action={this.renderActions()}
                content={this.renderContent()}>
            </Modal>

        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { post: state.posts[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { fetchPosts, deletePost })(PostDelete);