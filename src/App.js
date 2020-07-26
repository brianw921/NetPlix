import React from 'react';

import Row from './Components/Row.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hey Brian {process.env.REACT_APP_HELLO}</h1>
      <Row title="NetFlix Originals"/>
      <Row title="Trending Now" />
    </div>
  );
}

export default App;
