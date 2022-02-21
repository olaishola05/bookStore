import React from 'react';

function AddBook() {
  return (
    <form>
      <label htmlFor="name">
        Add new Book
        <input type="text" name="name" />
      </label>
      <select name="categories" id="">
        {/* <option value="select" /> */}
      </select>
      <input type="submit" value="ADD BOOK" />
    </form>
  );
}

export default AddBook;
