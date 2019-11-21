import React from 'react';
import { Link } from 'react-router-dom';

class AuthComponent extends React.Component{
    state = { login: true };
    render(){
        console.log(this.props)
        if (!this.props.isLoggedIn && this.state.login) {
            return <Link to="/login" className="ui item">Login</Link>
        } else {
            return <a onClick={() => { this.props.onLogOut(); this.setState({login: false}) }} className="ui item">LogOut</a>
        }
    };
}

export default AuthComponent;