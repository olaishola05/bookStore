import React from 'react';
import Books from './Books';
import AddBook from './AddBook';

function BooksContainer() {
  return (
    <div className="container">
      <Books />
      <AddBook />
    </div>
  );
}

export default BooksContainer;
