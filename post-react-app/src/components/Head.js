import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Responsive, Grid } from 'semantic-ui-react';
import './Head.css';

const Head = () => {
    return (
        <Fragment>
            <div className="ui violet secondary pointing menu">
                <NavLink to="/" exact activeClassName="active" className="item"><h1>Post List</h1></NavLink>
                <div className="right menu align-grid">
                    <Responsive as={Grid} columns={3} minWidth={768}>
                        <NavLink to="/new" activeClassName="active" className="ui item">New Post</NavLink>
                        <NavLink to="/login" activeClassName="active" className="ui item">Login</NavLink>
                        <NavLink to="/singup" activeClassName="active" className="ui item">Sing Up</NavLink>
                    </Responsive>
                </div>
            </div>
        </Fragment>
    );
}


export default Head;