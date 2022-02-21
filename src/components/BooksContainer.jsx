import React from 'react';
import Books from './Books';
import Navigation from './Navigation';

function BooksContainer() {
  return (
    <div className="container">
      <Navigation />
      <Books />
    </div>
  );
}

export default BooksContainer;
