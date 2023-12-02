/* External dependencies */
import React, { useState } from 'react';

/* Local dependencies */
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]); 

  const createPost = (newPost) => {
      setPosts([...posts, newPost])
  }
  //получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px'}} />
      <div>
        <select>
          <option value="value1">by name</option>
          <option value="value1">by description</option>
        </select>
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="List of posts" />
      ) : (
        <h1 style={{ textAlign: "center" }}>posts not found !</h1>
      )}
    </div>
  );
}

export default App;
