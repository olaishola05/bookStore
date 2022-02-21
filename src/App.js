import { Routes, Route } from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<BooksContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
