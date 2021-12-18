import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './hooks/Routes'


const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
