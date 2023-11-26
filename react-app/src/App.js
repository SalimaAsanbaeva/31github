/* External dependencies */
import React, { useState } from 'react';

/* Local dependencies */
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {
  const [value, setValue] = useState('input text'); 
  
  return (
    <div className="App">
      <PostItem post={{ id: 1, title: 'Javascript', body: 'Description' }} />
      <PostItem post={{ id: 2, title: 'Javascript', body: 'Description' }} />
      <PostItem post={{ id: 3, title: 'Javascript', body: 'Description' }} />
      <PostItem post={{id: 4, title: 'Javascript', body: 'Description'} } />
    </div>
  );
}

export default App;
