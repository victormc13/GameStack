import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Category from './routes/Category';
import Genres from './categories/genres/Genres';
import Genre from './categories/genres/Genre';
import GameDetails from './categories/genres/GameDetails';

function App() {
  return (
    <div className="box-border h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/genres/:genreId" element={<Genre />} />
        <Route path="/genres/:genreId/:gameId" element={<GameDetails />} />
      </Routes>
    </div>
  );
}

export default App;
