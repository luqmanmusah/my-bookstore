/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const submitBook = (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    const newBook = {
      id: uuidv4(),
      categorie: document.getElementsByClassName('category').value,
      title: document.getElementsByClassName('title')[0].value,
      author: document.getElementsByClassName('author')[0].value,
    };
    dispatch(addBook(newBook));
    form.reset();
  };

  return (
    <div>
      <h3>Add new book</h3>
      <form id="form">
        <label>Title:</label>
        <br />
        <input type="text" className="title" name="title" />
        <br />
        <label>Author:</label>
        <br />
        <input type="text" name="author" className="author" />
        <br />
        <label>Category:</label>
        <br />
        <input type="text" name="category" className="category" />
        <br />
        <button type="submit" onClick={submitBook}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
