import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

const Genre = () => {
  const { genreId } = useParams();
  const { genres } = useSelector((state) => state.genres);

  const selectedGenre = genres.filter((genre) => genre.id === Number(genreId));
  const games = selectedGenre.map((genre) => genre.games)[0];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h2 className="text-center bg-white text-slate-900 font-bold">{selectedGenre[0].name}</h2>
      <img className="w-full" src={selectedGenre[0].image_background} alt="genre" width="200px" />
      <ul className="genres-container text-white">
        {games.map((game) => (
          <li key={game.id} className="hover:bg-sky-800 w-60 h-28 p-3 flex justify-center content-center align-middle">
            <NavLink to={`${game.id}`} className="self-center" onClick={scrollToTop}>
              <p className="font-bold">{game.name}</p>
              <i className="text-lg">
                Score:
                { game.added || 'N/A' }
              </i>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
