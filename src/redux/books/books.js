import axios from 'axios';
import books from '../../JS/books';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const API_KEY = '';
const FETCH_SUCCESS = 'bookStore/books/FETCH_SUCCESS';
const FETCH_FAIL = 'bookStore/books/FETCH_FAIL';
const FETCH_STARTED = 'bookStore/books/FETCH_STARTED';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const fetchStarted = () => ({
  type: FETCH_STARTED,
});

const fetchSuccess = (books) => ({
  type: FETCH_SUCCESS,
  payload: books,
});

const fetchFailed = (error) => ({
  type: FETCH_FAIL,
  error,
});

const fetchBooks = () => async (dispatch) => {
  dispatch(fetchStarted());

  try {
    const response = await axios({
      method: 'get',
      baseURL: BASE_URL,
      url: `/apps/${API_KEY}/books`,
    });
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchFailed(error.toString()));
  }
};

const reducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case FETCH_SUCCESS:
      return [...action.payload];

    case FETCH_FAIL:
      return [];

    default:
      return state;
  }
};

export default reducer;
