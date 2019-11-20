import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login';

const Head = () => {
    return (
        <Fragment>
            <div className="ui violet secondary pointing menu">
                <NavLink to="/" exact activeClassName="active" className="item"><h1>Post List</h1></NavLink>
                <div className="right menu">
                    <NavLink to="/new" activeClassName="active" className="ui item">New Post</NavLink>
                    <NavLink to="/login" activeClassName="active" className="ui item">Login</NavLink>
                    <NavLink to="/singup" activeClassName="active" className="ui item">Sing Up</NavLink>

                </div>
            </div>
        </Fragment>
    );
}


export default Head;