/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';
import { deleteBookFromAPI, fetchBooks, addBookToAPI } from '../redux/books/books';

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
    const id = uuidv4();
    const newBook = {
      item_id: id,
      category: 'Economy',
      title,
      author,
    };
    dispatch(addBookToAPI(newBook));
  };

  const deleteBook = (id) => {
    dispatch(deleteBookFromAPI(id));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookStore = useSelector((state) => state.books);

  return (
    <div className="bookscontainer">
      <div className="books">
        <ul>
          {bookStore.map((book) => (
            <li key={book.id}>
              <div>
                <span>{book.category}</span>
                <h2>{book.title}</h2>
                <span>{book.author}</span>
                <div className="interraction">
                  <input type="button" value="Comment" />
                  <div>|</div>
                  <input type="button" value="Remove" onClick={() => deleteBook(book.id)} />

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
