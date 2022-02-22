import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './Books';
import Navigation from './Navigation';
import Categories from './Categories';

function BooksContainer() {
  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default BooksContainer;
