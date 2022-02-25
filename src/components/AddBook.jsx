/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import bookGenres from '../JS/books';

function AddBook({ value, handleInputChange, addNewBookProp, setValues }) {
  const { title, category, author } = value;

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && category) {
      addNewBookProp(title, category);
      setValues({ title: '', author: '', categories: '' });
    } else {
      return 'Fields cannot be empty';
    }
    return e;
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">
        ADD NEW BOOK
        <input
          type="text"
          name="title"
          placeholder="Book title"
          onChange={handleInputChange}
          value={title}
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          onChange={handleInputChange}
          value={author}
        />
      </label>
      <select name="category" id="categories" onChange={handleInputChange}>
        <option className="options" hidden>
          Category
        </option>
        {bookGenres.map((genre) => (
          <option key={genre} value={genre} name="category">
            {genre}
          </option>
        ))}
      </select>
      <input type="submit" value="ADD BOOK" />
    </form>
  );
}

AddBook.propTypes = {
  value: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  addNewBookProp: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
};

export default AddBook;
