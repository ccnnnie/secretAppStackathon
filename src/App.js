import React from 'react';
import Home from './components/Home';
import Send from './components/Send';
import Receive from './components/Receive';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/send" component={Send} />
        <Route path="/receive" component={Receive} />
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
