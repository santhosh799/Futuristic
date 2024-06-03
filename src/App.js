// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import './components/styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Workspace />
    </div>
  );
};

export default App;
