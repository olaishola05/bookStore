/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import books from '../JS/books';
import AddBook from './AddBook';
import { addBook, removeBook } from '../redux/books/books';

const initValues = {
  title: '',
  author: '',
};
const Books = () => {
  const [values, setValues] = useState(initValues);
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const addNewBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
  };

  const deleteBook = (id) => {
    const bookId = books.find((book) => book.id === id);
    dispatch(removeBook(bookId));
  };

  return (
    <div className="bookscontainer">
      <div className="books">
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <div>
                <span>{book.genre}</span>
                <h2>{book.title}</h2>
                <span>{book.author}</span>
                <div className="interraction">
                  <span>Comment</span>
                  <div>|</div>
                  <button
                    type="button"
                    onClick={(e) => deleteBook(e.target.value)}>
                    Remove
                  </button>
                  <div>|</div>
                  <span>Edit</span>
                </div>
              </div>

              <div className="percentage">
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar value={book.completion} />
                </div>
                <div className="completion">
                  <span>{`${book.completion}%`}</span>
                  <span>Completed</span>
                </div>
              </div>

              <div className="chapter">
                <span>Current Chapter</span>
                <p>{book.chapter}</p>
                <button type="button" className="progress">
                  UPDATE PROGRESS
                </button>
              </div>
            </li>
          ))}
        </ul>
        <hr />
        <AddBook
          value={values}
          handleTitleChange={handleTitleChange}
          addNewBookProp={addNewBook}
          setValues={setValues}
        />
      </div>
    </div>
  );
};

export default Books;
