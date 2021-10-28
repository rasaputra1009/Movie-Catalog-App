import React from 'react'
import Home from './components/Home';
import Add from './components/Add';
import MovieDetail from './components/MovieDetail';
import Header from './components/Header';
import Edit from "./components/Edit";
import "./styles/App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from './components/Movies';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/add" component={Add} />
          <Route path="/edit/:title" component={Edit} />
          {/* <Route path="?search={searchtext}" component={Movies} /> */}
          <Route path="/movie-detail" component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
