import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PostForm from './post/PostForm';
import ViewPost from './view/ViewPost';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="mt-5">
          <div className="alert alert-primary box-sha">
            <span>App React Redux</span>
          </div>
          <div className="pt-4 pl-4 pr-4">
            <div className="row">
              <PostForm />
              <ViewPost />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
