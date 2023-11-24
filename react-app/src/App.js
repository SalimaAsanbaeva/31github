/* External dependencies */
import React, { useState } from 'react';

/* Local dependencies */
import Counter from './components/Counter';

function App() {
  const [value, setValue] = useState('input text'); 
  
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
