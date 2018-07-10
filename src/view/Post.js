import React from 'react';

class Post extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.post.title}</p>
                <p>{this.props.post.description}</p>
            </div>
        );
    }
}

export default Post;