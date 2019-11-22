import React, { useReducer } from 'react';
import Head from './Head';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Login from './Login';
import PostList from './PostList';
import NewPost from './NewPost';
import EditPost from './EditPost';
import { Provider } from './AuthContext';
import userReducer from '../reducers/userReducer';

const App = () => {
    const useAuthState = useReducer(userReducer, null);
    return (
        <div className="ui container">
            <Provider value={useAuthState}>
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
            </Provider>
        </div>
    );
}

export default App;