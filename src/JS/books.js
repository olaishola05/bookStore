import { v4 as uuidv4 } from 'uuid';

export const books = [
  {
    id: uuidv4(),
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    completion: '64',
    chapter: '17',
  },
  {
    id: uuidv4(),
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    completion: '8',
    chapter: '3 "A Lesson Learned"',
  },
  {
    id: uuidv4(),
    genre: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Sussane Collins',
    completion: '0',
    chapter: 'Introduction',
  },
];

// export default books;

const bookGenres = [
  'Action and Adventure',
  'Economy',
  'Classics',
  'Comic Book',
  'Graphic Novel',
  'Detective and Mystery',
  'Fantasy',
  'Historical Fiction',
  'Literary Fiction',
  'Science Fiction',
  'Horror',
  'Romance',
  'Suspense and Thrillers',
];

export default bookGenres;
