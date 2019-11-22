import React from 'react';
import Head from './Head';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Login from './Login';
import PostList from './PostList';
import NewPost from './NewPost';
import EditPost from './EditPost';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Head />
                    <Switch>
                        <Route path="/" exact component={PostList}></Route>
                        <Route path="/login" component={Login} />
                        <Route path="/new" component={NewPost} />
                        <Route path="/posts/edit/:id" component={EditPost}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;