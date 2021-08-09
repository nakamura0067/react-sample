import React from 'react';

import logo from './logo.svg';
import './Top.css';

export default function Top(){
    return (
      <div className="App-Top">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Select Menu</h1>
      </div>
    );
}
