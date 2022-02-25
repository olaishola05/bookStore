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
      <div>
        <span>{book.category}</span>
        <h2>{book.title}</h2>
        <span>{book.author || 'Kate Henshaw'}</span>
        <div className="interraction">
          <input type="button" value="Comment" />
          <div>|</div>
          <input type="button" value="Remove" onClick={() => deleteBook(book.id)} />

          <div>|</div>
          <input type="button" value="Edit" />
        </div>
      </div>

      <div className="percentage">
        <div style={{ width: 50, height: 50 }}>
          <CircularProgressbar value={percentage} />
        </div>
        <div className="completion">
          <span>{`${percentage}%`}</span>
          <span>Completed</span>
        </div>
      </div>

      <div className="chapter">
        <span>Current Chapter</span>
        <p>INTRODUCTION</p>

        <button type="button" className="progress">
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
