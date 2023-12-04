/* External dependencies */
import React, { useState } from 'react';

/* Local dependencies */
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'аа', body: 'бб' },
    { id: 2, title: 'гг', body: 'аа' },
    { id: 3, title: 'вв', body: 'яя' },
  ]); 
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
      setPosts([...posts, newPost])
  }
  //получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px'}} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sorting"
          options={[
            { value: 'title', name: 'By name' },
            {value: 'body', name: 'By discription'},
          ]}
        />
      </div>
      {posts.length
        ? (
        <PostList remove={removePost} posts={posts} title="List of posts" />
      ) : (
        <h1 style={{ textAlign: "center" }}>posts not found !</h1>
      )}
    </div>
  );
}

export default App;
