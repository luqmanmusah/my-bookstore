import React from 'react';
import PropTypes from 'prop-types';
import ActionButtons from './Actionbuttons';

const Book = (props) => {
  const {
    bookid,
    categorie,
    title,
    author,
  } = props;

  return (
    <div>
      <span>{categorie}</span>
      <span>{title}</span>
      <span>{author}</span>
      <ActionButtons bookid={bookid} />
    </div>
  );
};

Book.defaultProps = {
  bookid: '',
  categorie: '',
  title: '',
  author: '',
};

Book.propTypes = {
  bookid: PropTypes.string,
  categorie: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
