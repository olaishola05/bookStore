/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';
import { fetchBooks, addBookToAPI } from '../redux/books/books';
import Book from './Book';

const Books = () => {
  const initValues = {
    id: '',
    title: '',
    category: '',
    author: '',
  };
  const [values, setValues] = useState(initValues);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const addNewBook = (title, category) => {
    const id = uuidv4();
    const newBook = {
      item_id: id,
      id,
      category,
      title,
    };
    dispatch(addBookToAPI(newBook));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookStore = useSelector((state) => state.books);

  return (
    <div className="bookscontainer">
      <div className="books">
        <ul>
          <Book books={bookStore} />
        </ul>
        <hr />
        <AddBook
          value={values}
          handleInputChange={handleInputChange}
          addNewBookProp={addNewBook}
          setValues={setValues}
        />
      </div>
    </div>
  );
};

export default Books;
