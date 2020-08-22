import React from 'react';
import logo from './logo.svg';
import './App.css';
import style from './test.module.scss';
import Header from './test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={style.hello}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
        >
          Learn React
        </a>
      </header>
      <p className={style['hello']}>
        Hello!
      </p>
      <Header/>
    </div>
  );
}

export default App;
