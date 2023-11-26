/* External dependencies */
import React, { useState } from 'react';

/* Local dependencies */
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' }
    { id: 2, title: 'Javascript 2', body: 'Description' }
    { id: 3, title: 'Javascript 3', body: 'Description' }
  ]); 
  
  return (
    <div className="App">
      {posts.map(post =>
        <div>POST</div>
        )}
    </div>
  );
}

export default App;
