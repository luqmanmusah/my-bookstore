import React, { PropTypes } from 'react'
import Book from './book'

const ListBooks = ({ books, onBookClick }) => (
  <ul>
    {books.map(todo =>
      <Book
        key={todo.id}
        {...todo}
        onClick={() => onBookClick(todo.id)}
      />
    )}
  </ul>
)

ListBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onBookClick: PropTypes.func.isRequired
}

export default ListBooks