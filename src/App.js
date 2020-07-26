import React from 'react';
import Row from './Components/Row.js'
import './App.css';
//fetch URL's from request.js
import requests from './requests.js';

function App() {
  return (
    <div className="App">
      <h1>Hey Brian {process.env.REACT_APP_HELLO}</h1>
      <Row title="NetFlix Originals" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
    </div>
  );
}

export default App;
