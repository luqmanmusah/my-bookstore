import React from 'react';
import { useSelector } from 'react-redux';
import AddBookForm from './addBookForm';
import Book from './book';

const ListBooks = () => {
  const myBooks = useSelector((state) => state.booksReducer);

  const myBooksArr = myBooks.map((book) => {
    const {
      id,
      categorie,
      title,
      author,
    } = book;
    return (
      <Book
        key={id}
        bookid={id}
        categorie={categorie}
        title={title}
        author={author}
      />
    );
  });
  return (
    <div className="home-page">
      { myBooksArr }
      <AddBookForm />
    </div>
  );
};

export default ListBooks;
