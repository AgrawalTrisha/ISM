import React from 'react';
import logo from './ISM-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Trisha Agrawal's Original Work
        </h1>
        <p>
          This is a webpage coded in React JS. It's made with Javascript, JSX tags, and has some CSS styling to make it visually appealing.
        </p>
        <a
          className="App-link"
          href="https://agrawaltrisha.weebly.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          My portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
