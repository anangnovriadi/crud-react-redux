import React from 'react';
import { connect } from 'react-redux';

class Post extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <p>{this.props.post.title}</p>
                    <p>{this.props.post.description}</p>
                </div>
                <div className="row m-0 pt-1">
                    <div className="pr-2">
                        <button type="button" className="btn btn-info">Edit</button>
                    </div>
                    <div>
                        <button onClick={()=>this.props.dispatch({type: 'DELETE_POST', id: this.props.post.id})} className="btn btn-dark">Delete</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default connect()(Post);