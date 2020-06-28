import React from 'react';
import Home from './components/Home';
import Send from './components/Send';
import Receive from './components/Receive';
import VerifCode from './components/VerifCode';
import Secret from './components/Secret';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/send/verification" component={VerifCode} />
            <Route path="/receive/secret" component={Secret} />
            <Route path="/send" component={Send} />
            <Route path="/receive" component={Receive} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
