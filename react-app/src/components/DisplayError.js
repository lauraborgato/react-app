import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../history';

class DisplayError extends React.Component {
    renderActions() {
        return (
            <Link className="ui button" to={this.props.location.state.redirect}>Acept</Link>
        );
    }
    renderContent() {
        return (
            <div className="ui negative message">
                <div className="content">
                    <p>{this.props.location.state.content}</p>
                </div>
            </div>
        );
    }
    render() {
        console.log(this.props.location.state);
        return (
            <Modal
                title={this.props.location.state.title}
                onDismiss={() => { history.push(this.props.location.state.redirect) }}
                action={this.renderActions()}
                content={this.renderContent()}>
            </Modal>
        );
    }
}

export default DisplayError;