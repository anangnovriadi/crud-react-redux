import React from 'react';
import { connect } from 'react-redux';

class PostForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const description = this.getDescription.value;
        const data = {
            title, 
            description
        }
        console.log(data);
        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getDescription.value = '';
    }
    render() {
        return(
            <div className="col-md-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title Post</label>
                        <input type="text" className="form-control" ref={(input)=>this.getTitle = input} placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label>Description Post</label>
                        <textarea type="text" className="form-control" rows="3" ref={(input)=>this.getDescription = input} placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Add Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);