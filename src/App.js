import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Category from './routes/Category';
import RecentlyReleased from './categories/RecentlyReleased';
import Popular from './categories/Popular';
import HallOfFame from './categories/HallOfFame';
import Upcoming from './categories/Upcoming';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Category />} />
        <Route path='/recently-released' element={<RecentlyReleased />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/hall-of-fame' element={<HallOfFame />} />
        <Route path='/upcoming' element={<Upcoming />} />
      </Routes>
    </div>

  );
}

export default App;
