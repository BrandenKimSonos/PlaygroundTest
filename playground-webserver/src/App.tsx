import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import RoutingComponent from './components/RoutingComponent'

function App() {
  return (
    <div>
      <Router>
        <RoutingComponent />
      </Router>
    </div>
  );
}

export default App;
