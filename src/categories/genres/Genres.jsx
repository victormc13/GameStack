import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import getGenres from '../../redux/byGenres/fetchGenres';

const Genres = () => {
  const { genres } = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="genres-section">
      <h2 className="text-slate-900 font-bold">Genres</h2>
      <ul className="genres-container text-white">
        {genres.map((genre) => (
          <li key={genre.id} className="hover:bg-sky-800 cursor-pointer">
            <NavLink to={`${genre.id}`} onClick={scrollToTop}>
              <p className="text-2xl mb-3">{genre.name}</p>
              <img src={genre.image_background} alt={genre.name} width="200px" />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
