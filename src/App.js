import React, { Component } from 'react';

import './App.css';
import { DISHES } from './container/Dishes/Dishes';
import MainComponent from './components/MainComponent/MainComponent';

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <MainComponent />
    </div>
    );
  }
} 

export default App;
