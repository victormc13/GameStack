import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Category from './routes/Category';
import Genres from './categories/genres/Genres';
import Genre from './categories/genres/Genre';
import GameDetails from './categories/genres/GameDetails';
import Platforms from './categories/platforms/Platforms';
import Platform from './categories/platforms/Platform';
import Creators from './categories/creators/Creators';
import Creator from './categories/creators/Creator';
import Developers from './categories/developers/Developers';

function App() {
  return (
    <div className="h-screen App">
      <Header />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Category />} />
        {/* Categories */}
        {/* Genres page */}
        <Route path="/genres" element={<Genres />} />
        <Route path="/genres/:genreId" element={<Genre />} />
        <Route path="/genres/:genreId/:gameId" element={<GameDetails />} />
        {/* Platforms page */}
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/platforms/:platformId" element={<Platform />} />
        <Route path="/platforms/:platformId/:gameId" element={<GameDetails />} />
        {/* Creators page */}
        <Route path="/creators" element={<Creators />} />
        <Route path="/creators/:creatorId" element={<Creator />} />
        <Route path="/creators/:creatorId/:gameId" element={<GameDetails />} />
        {/* Developers page */}
        <Route path="/developers" element={<Developers />} />
      </Routes>
    </div>
  );
}

export default App;
