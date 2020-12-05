import React from 'react';
import MonitorPanel from './view/MonitorPanel';
import ControlPanel from './view/ControlPanel';
import './App.css';

function App() {
  return (
    <div id="app">
      <MonitorPanel />
      <ControlPanel />
    </div>
  );
}

export default App;
