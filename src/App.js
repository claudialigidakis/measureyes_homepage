import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Header from './shared/Header';
import Footer from './shared/Footer'
// CONTAINERS
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
