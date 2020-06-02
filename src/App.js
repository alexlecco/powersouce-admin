import React from 'react';
import './App.css';
import User from './components/User'
import Exercise from './components/Exercise';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Edit <code>src/App.js</code> and save to reload.</p>
        <User />
        <Exercise />
      </header>
    </div>
  );
}

export default App;
