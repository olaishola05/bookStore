import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_KEY = 'XVV4BFkGhlfwaPhIL9fz';
const FETCH_BOOKS_SUCCESS = 'bookStore/books/FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_FAIL = 'bookStore/books/FETCH_BOOKS_FAIL';
const initState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const fetchSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

const fetchFailed = () => ({
  type: FETCH_BOOKS_FAIL,
});

const convertResponseToArray = (response) => {
  const booksArray = [];
  const books = Object.keys(response);
  for (let i = 0; i < books.length; i += 1) {
    const id = books[i];
    const { title, category } = response[id][0];
    booksArray.push({ id, title, category });
  }

  return booksArray;
};

export const fetchBooks = () => async (dispatch) => {
  try {
    const response = await axios({
      method: 'get',
      baseURL: BASE_URL,
      url: `/apps/${APP_KEY}/books`,
    });
    dispatch(fetchSuccess(convertResponseToArray(response.data)));
  } catch (error) {
    dispatch(fetchFailed(error.toString()));
  }
};

export const addBookToAPI = (book) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'post',
      baseURL: BASE_URL,
      url: `/apps/${APP_KEY}/books`,
      data: book,
    });
    if (response.status === 201) dispatch(addBook(book));
  } catch (error) {
    dispatch(fetchFailed(error.toString()));
  }
};

export const deleteBookFromAPI = (id) => async (dispatch) => {
  try {
    await axios({
      method: 'delete',
      baseURL: BASE_URL,
      url: `/apps/${APP_KEY}/books/${id}`,
    });
    dispatch(removeBook(id));
  } catch (error) {
    error.toString();
  }
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case FETCH_BOOKS_SUCCESS:
      return [...action.payload];

    case FETCH_BOOKS_FAIL:
      return state;

    default:
      return state;
  }
};

export default reducer;
