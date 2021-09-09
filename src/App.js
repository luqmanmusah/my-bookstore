import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ListBooks from './components/listBooks';
import Nav from './components/Nav';
import AddBookForm from './components/addBookForm';
import Categories from './redux/categories/categories'

function App() {
  return (
    <>
      <Nav />
      <Switch>
    <div>
      <Route path="/">
      <ListBooks />
      <AddBookForm />
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
