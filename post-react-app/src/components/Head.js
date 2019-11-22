import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Responsive, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './Head.css';
import { logOut } from '../actions/index';

class Head extends React.Component {

    renderLogin() {
        console.log(this.props)
        if (this.props.isLoggedIn) {
            return (
                <Fragment>
                    <NavLink to="/new" activeClassName="active" className="ui item">New Post</NavLink>
                    <button onClick={() => this.props.logOut()} className="ui item">Logout</button>
                </Fragment>
            );
        }
        else {
            return (
                <Fragment>
                    <NavLink to="/login" activeClassName="active" className="ui item">Login</NavLink>
                    <NavLink to="/signup" activeClassName="active" className="ui item">Sing Up</NavLink>
                </Fragment>
            )
        }
    }

    render() {
        return (
            <Fragment>
                <div className="ui violet secondary pointing menu">
                    <NavLink to="/" exact activeClassName="active" className="item"><h1>Post List</h1></NavLink>
                    <div className="right menu align-grid">
                        <Responsive as={Grid} columns={3} minWidth={768}>

                            {this.renderLogin()}
                        </Responsive>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { isLoggedIn: (state.user != null && state.user.expirationDate > new Date()) };
}

export default connect(mapStateToProps, { logOut })(Head);