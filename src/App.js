import React from 'react';
import Row from './Components/Row.js'
import './App.css';
//fetch URL's from request.js
import requests from './requests.js';

function App() {
  console.log(requests)
  return (
    <div className="App">
      <h1>Hey Brian {process.env.REACT_APP_HELLO}</h1>
      <Row title="NetFlix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
