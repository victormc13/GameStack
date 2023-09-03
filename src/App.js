import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Category from './routes/Category';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Category />} />
      </Routes>
    </div>

  );
}

export default App;
