import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header.js'
import Body from './components/body.js'
import Footer from './components/footer.js'


function App() {
  return (
    <div className="App">
        <Header />
        <Body />
        <Footer />
    </div>
  );
}

export default App;
