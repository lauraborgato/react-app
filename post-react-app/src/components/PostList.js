import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import PostItem from './PostItem';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPostsList() {
        return this.props.posts.map((post, index) => {
            return (
                <PostItem post={post} index={index} key={post._id} user={this.props.user}></PostItem>
            );
        });
    }
    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            );
        }
    }
    render() {
        if (!this.props.posts) {
            return <div>Loading..</div>
        }
        return (
            <div>
                {this.renderPostsList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.user);
    return {
        posts: state.posts[0],
        userId: state.user.length > 0 ? state.user[0].userId : null
        //currentUserId: state.auth.userId,
        //isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
