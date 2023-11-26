/* External dependencies */
import React, { useState } from 'react';

/* Local dependencies */
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]); 
  
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Post title"/>
        <input type="text" placeholder="Post description"/>
        <button>Create a post</button>
      </form>
      <PostList posts={posts} title="List of posts" />
    </div>
  );
}

export default App;
