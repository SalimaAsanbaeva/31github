/* External dependencies */
import React, { useState } from 'react';

/* Local dependencies */
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';

function App() {
  const [value, setValue] = useState('input text'); 
  
  return (
    <div className="App">
      <ClassCounter/>
    </div>
  );
}

export default App;
