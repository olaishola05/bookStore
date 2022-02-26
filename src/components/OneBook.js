/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBookFromAPI } from '../redux/books/books';

function OneBook(props) {
  const { book } = props;

  const percentage = 64;
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(deleteBookFromAPI(id));
  };

  return (
    <>
      <div className="booksection">
        <span className="genre">{book.category}</span>
        <h2>{book.title}</h2>
        <span className="author">{book.author || 'Kate Henshaw'}</span>
        <div className="interraction">
          <input type="button" value="Comment" id="comment" />
          <div className="divider"></div>
          <input type="button" value="Remove" onClick={() => deleteBook(book.id)} />

          <div className="divider"></div>
          <input type="button" value="Edit" />
        </div>
      </div>

      <div className="percentage">
        <div style={{ width: 50, height: 50 }}>
          <CircularProgressbar value={percentage} />
        </div>
        <div className="completion">
          <span className="stats">{`${percentage}%`}</span>
          <span className="complete">Completed</span>
        </div>
      </div>

      <div className="line"></div>

      <div className="chapter">
        <span>Current Chapter</span>
        <p>INTRODUCTION</p>

        <button type="button" className="progressBtn">
          UPDATE PROGRESS
        </button>
      </div>
    </>
  );
}

OneBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default OneBook;
