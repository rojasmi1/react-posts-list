import React, { Component } from 'react';
import './post-list.css';

// Este componente es de presentación, por lo tanto no maneja state,
// solamente recibe props del contenedor <Home /> y se encarga de mostrar esos datos
// como una lista de posts 

class PostList extends Component {
  render() {
    return (
      <div className="postList">
        {this.props.posts.map((post, index) => {
            return (
            <li key={index} className="post">
              <span className="title">{post.title}</span>
              <p>{post.body}</p>
            </li>
            )
        })}
      </div>
    );
  }
}

export default PostList;