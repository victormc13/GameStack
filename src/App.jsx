import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Category from './routes/Category';
import Genres from './categories/genres/Genres';
import Genre from './categories/genres/Genre';
import GameDetails from './categories/genres/GameDetails';
import Platforms from './categories/platforms/Platforms';
import Platform from './categories/platforms/Platform';
import Creators from './categories/creators/Creators';

function App() {
  return (
    <div className="h-screen App">
      <Header />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/genres/:genreId" element={<Genre />} />
        <Route path="/genres/:genreId/:gameId" element={<GameDetails />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/platforms/:platformId" element={<Platform />} />
        <Route path="/platforms/:platformId/:gameId" element={<GameDetails />} />
        <Route path="/creators" element={<Creators />} />
      </Routes>
    </div>
  );
}

export default App;
