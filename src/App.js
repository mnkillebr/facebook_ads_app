import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdPage from './Pages/AdPage';
// import Home from './Pages/Home';
import HomePage from './Pages/HomePage'
import LostPage from './Pages/LostPage';
import './App.css';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:id" component={AdPage} />
          <Route component={LostPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
