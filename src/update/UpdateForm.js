import React from 'react';
import { connect } from 'react-redux';

class UpdateForm extends React.Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newDesc = this.getDescription.value;
        const data = {
            newTitle, newDesc
        }
        // console.log(data);
        this.props.dispatch({ type: 'UPDATE_POST', id: this.props.post.id, data: data })
    }
    render() {
        return(
            <div className="col-md-12">
                <form onSubmit={this.handleEdit}>
                    <div className="form-group">
                        <label>Title Post</label>
                        <input type="text" className="form-control" defaultValue={this.props.post.title} ref={(input)=>this.getTitle = input} placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label>Description Post</label>
                        <textarea type="text" className="form-control" rows="3" defaultValue={this.props.post.description} ref={(input)=>this.getDescription = input} placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Update Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(UpdateForm);