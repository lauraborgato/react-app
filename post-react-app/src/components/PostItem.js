import React, { Component } from 'react'
import { Accordion, Icon, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './PostItem.css';

export default class PostItem extends Component {
    state = { activeIndex: 1 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    renderAdmin(post) {
        console.log(post.userId);
        console.log(this.props.userId);
        if (this.props.userId === post.userId) {
            return (
                <div className="right floated content">
                    <Link className="ui button primary" to={`streams/edit/${post._id}`}>Edit</Link>
                    <Link className="ui button negative" to={`streams/delete/${post._id}`}>Delete</Link>
                </div>
            );
        }
    }

    render() {
        const { activeIndex } = this.state
        return (
            <Accordion>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <Header as='h3'>
                        <Icon name='dropdown' />
                        {this.props.post.postTitle}
                    </Header>

                </Accordion.Title>
                <Accordion.Content className="post-image" active={activeIndex === 0}>
                    <p>
                        {this.props.post.postContent}
                    </p>
                    <img src={this.props.post.imagePath} className="ui large image" />
                    {this.renderAdmin(this.props.post)}
                </Accordion.Content>
            </Accordion >
        )
    }
}