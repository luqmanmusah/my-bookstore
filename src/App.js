import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ListBooks from './components/listBooks';
import Nav from './components/Nav';
import Categories from './components/categories'

function App() {
  return (
    <>
      <Nav />
      <Switch>
    <div>
      <Route path="/">
      <ListBooks />
      </Route>
      <Route path="/categories">
      <Categories />
      </Route>
      </div>
      </Switch>
      </>
    
  )
}

export default App;
