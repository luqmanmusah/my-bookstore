import React from 'react'
import Book from './book'

const ListBooks = ({ books, onBookClick }) => (
  <div>
    <h1>
      List of Books
    </h1>
    <h3>
      Books
    </h3>
    <Book />
  </div>
)

export default ListBooks