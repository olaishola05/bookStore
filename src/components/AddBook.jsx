import React from 'react';
import Select from 'react-select';

function AddBook() {
  const options = [{ value: 'Categories', label: 'Categories' }];
  return (
    <form>
      <label htmlFor="name">
        ADD NEW BOOK
        <input type="text" name="name" placeholder="Book title" />
      </label>
      <Select options={options} placeholder="Category" />
      <input type="submit" value="ADD BOOK" />
    </form>
  );
}

export default AddBook;
