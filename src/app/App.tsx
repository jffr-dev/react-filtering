import React from 'react';
import SearchContainer from '../search';

import './App.scss';
import logo from './logo.svg';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
      </header>
      <SearchContainer />
    </div>
  );
}

export default App;
