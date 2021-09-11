import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const ActionButtons = (props) => {
  const dispatch = useDispatch();
  const { bookid } = props;

  const removeBookFromStore = () => {
    dispatch(removeBook(bookid));
  };

  return (
    <div>
      <button type="button">Comments</button>
      <button type="button" onClick={removeBookFromStore}>Remove</button>
      <button type="button">Edit</button>
    </div>
  );
};

ActionButtons.defaultProps = {
  bookid: '',
};

ActionButtons.propTypes = {
  bookid: PropTypes.string,
};

export default ActionButtons;
