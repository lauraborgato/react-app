import React from 'react';
import Head from './Head';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Login from './Login';
import PostList from './PostList';
import NewPost from './NewPost';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Head />
                    <Switch>
                        <Route path="/" exact component={PostList}></Route>
                        <Route path="/login" component={Login} />
                        <Route path="/new" component={NewPost}/>
                    </Switch>
            </div>
            </Router>
        </div>
    );
}

export default App;

/*
<Switch>
<Route path="/" exact component={StreamList} />
<Route path="/streams/new" component={StreamCreate} />
<Route path="/streams/edit/:id" component={StreamEdit} />
<Route path="/streams/delete/:id" component={StreamDelete} />
<Route path="/streams/:id" component={StreamShow} />
</Switch>*/