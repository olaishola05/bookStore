import React from 'react';
import PropTypes from 'prop-types';

import OneBook from './OneBook';

const Book = (props) => {
  const { books } = props;

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <OneBook key={book.id} book={book} />
          </li>
        ))}
      </ul>
    </>
  );
};

Book.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Book;
