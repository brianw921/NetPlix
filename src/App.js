import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hey Brian {process.env.REACT_APP_HELLO}</h1>
    </div>
  );
}

export default App;
