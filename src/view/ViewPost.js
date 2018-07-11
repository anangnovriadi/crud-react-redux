import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditForm from '../update/UpdateForm'; 

class ViewPost extends React.Component {
    render() {
        return(
            <div className="col-md-7 pl-5">
                <div className="div-all">
                    <h4>All Post</h4>
                </div>
                <div className="pt-2">
                    {/* {console.log(this.props.posts)} */}
                    {this.props.posts.map((post) => (
                        <div key={post.id}>
                            {post.editing ? <EditForm post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(ViewPost);