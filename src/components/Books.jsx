import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AddBook from './AddBook';

const Books = () => {
  const books = [
    {
      genre: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      completion: '64',
      chapter: '17',
    },
    {
      genre: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      completion: '8',
      chapter: '3 A Lesson Learned',
    },
    {
      genre: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Sussane Collins',
      completion: '0',
      chapter: 'Introduction',
    },
  ];
  return (
    <div className="bookscontainer">
      <div className="books">
        <ul>
          {books.map((book) => (
            <li key={book.genre}>
              <div>
                <span>{book.genre}</span>
                <h2>{book.title}</h2>
                <span>{book.author}</span>
                <div className="interraction">
                  <span>Comment</span>
                  <div>|</div>
                  <span>Remove</span>
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
        <AddBook />
      </div>
    </div>
  );
};

export default Books;
