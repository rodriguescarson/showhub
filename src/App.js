// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default App;
