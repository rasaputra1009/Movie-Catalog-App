import React from 'react'
import Home from './components/Home';
import Add from './components/Add';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={Add} />
          {/* <Route path="/edit" component={Edit} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
