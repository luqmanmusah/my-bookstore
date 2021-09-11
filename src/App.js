import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ListBooks from './components/listBooks';
import Nav from './components/Nav';
import Categories from './components/categories';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>

        <Route exact path="/">
          <div>
            <ListBooks />
          </div>
        </Route>

        <Route path="/categories">
          <div>
            <Categories />
          </div>
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
