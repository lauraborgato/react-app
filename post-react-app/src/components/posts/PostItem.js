import React, { Component } from 'react'
import { Accordion, Icon, Header, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './PostItem.css';

class PostItem extends Component {
    state = { activeIndex: -1 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
  

    renderAdmin(post) {
        if (this.props.isLoggedIn && this.props.user.userId === post.userId) {
            return (
                <div className="right floated content align-center">
                    <Link className="ui button primary fixed-size" to={`posts/edit/${post._id}`}>Edit</Link>
                    <Link className="ui button negative fixed-size" to={`posts/delete/${post._id}`}>Delete</Link>
                </div>
            );
        }
    }

    render() {
        const { activeIndex } = this.state
        return (
            <Accordion styled style={{width:'100%'}}>
                <Accordion.Title
                    active={activeIndex === this.props.index}
                    index={this.props.index}
                    onClick={this.handleClick}
                >
                    <Header as='h3'>
                        <Icon name='dropdown' />
                        {this.props.post.postTitle}
                    </Header>

                </Accordion.Title>
                <Accordion.Content className="post-content" active={activeIndex === this.props.index}>
                    <Card className="post-card">
                        <Image src={this.props.post.imagePath} rounded wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{this.props.post.postTitle}</Card.Header>
                            <Card.Description>
                                {this.props.post.postContent}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    {this.renderAdmin(this.props.post)}
                </Accordion.Content>
            </Accordion >
        )
    }
}

export default PostItem;