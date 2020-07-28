import React from 'react';
import Row from './Components/Row.js';
import './App.css';
//fetch URL's from request.js
import requests from './requests.js';
import Banner from './Components/Banner.js';
import Nav from './Components/Nav.js';

function App() {
  console.log(requests)
  return (
    <div className="App">
      {/* Nav */}
      <Nav/>
      <Banner/>
      <Row title="Netplix Originals" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
