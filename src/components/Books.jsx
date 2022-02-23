import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';
import { addBook, removeBook } from '../redux/books/books';

const Books = () => {
  const initValues = {
    title: '',
    author: '',
  };

  const [values, setValues] = useState(initValues);
  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.books);

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
      genre: 'Economy',
      title,
      author,
      completion: '0',
      chapter: 'Introduction',
    };

    dispatch(addBook(newBook));
  };

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="bookscontainer">
      <div className="books">
        <ul>
          {bookStore.map((book) => (
            <li key={book.id}>
              <div>
                <span>{book.genre}</span>
                <h2>{book.title}</h2>
                <span>{book.author}</span>
                <div className="interraction">
                  <input type="button" value="Comment" />
                  <div>|</div>
                  <input
                    type="button"
                    value="Remove"
                    onClick={() => deleteBook(book.id)}
                  />

                  <div>|</div>
                  <input type="button" value="Edit" />
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
