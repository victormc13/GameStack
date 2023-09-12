import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

const Platform = () => {
  const { platformId } = useParams();
  const { platforms } = useSelector((state) => state.platforms);

  const selectedPlatform = platforms.filter((platform) => platform.id === Number(platformId));
  const games = selectedPlatform.map((platform) => platform.games)[0];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h2 className="text-center bg-white text-slate-900 font-bold">{selectedPlatform[0].name}</h2>
      <img className="w-full" src={selectedPlatform[0].image_background} alt="platform" width="200px" />
      <ul className="platforms-container text-white">
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

export default Platform;
