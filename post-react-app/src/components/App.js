import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Head from './Head';
import history from '../history';
import Login from './Login';
import PostList from './posts/PostList';
import NewPost from './posts/NewPost';
import EditPost from './posts/EditPost';
import SignUp from './SignUp';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Head />
                    <Switch>
                        <Route path="/" exact component={PostList}></Route>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/new" component={NewPost} />
                        <Route path="/posts/edit/:id" component={EditPost}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;