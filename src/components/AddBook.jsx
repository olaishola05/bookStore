/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import bookGenres from '../JS/books';

function AddBook(props) {
  const { value, handleInputChange, addNewBookProp, setValues } = props;
  const { title, category } = value;

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && category) {
      addNewBookProp(title, category);
      setValues({ title: '', categories: '' });
    } else {
      return 'Fields cannot be empty';
    }
    return e;
  };
  return (
    <div className="addbook">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            name="title"
            placeholder="Book title"
            onChange={handleInputChange}
            value={title}
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
        <input type="submit" value="ADD BOOK" className="submitBtn" />
      </form>
    </div>
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
