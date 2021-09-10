import React from 'react'
import AddBookForm from './addBookForm'

const ListBooks = ({ books, onBookClick }) => (
  <div>
    <h1>
      List of Books
    </h1>
    <h3>
      Books
    </h3>
    <AddBookForm />
  </div>
)

export default ListBooks
