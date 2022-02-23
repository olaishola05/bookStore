/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

function AddBook({ value, handleTitleChange, addNewBookProp, setValues }) {
  const options = [{ cats: 'Categories', label: 'Categories' }];
  const { title, author } = value;

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      addNewBookProp(title, author);
      setValues({ title: '', author: '' });
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
          onChange={handleTitleChange}
          value={title}
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          onChange={handleTitleChange}
          value={author}
        />
      </label>
      <Select options={options} placeholder="Category" />
      <input type="submit" value="ADD BOOK" />
    </form>
  );
}

AddBook.propTypes = {
  value: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  addNewBookProp: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
};

export default AddBook;
