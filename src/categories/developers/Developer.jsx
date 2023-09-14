import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

const Developer = () => {
  const { developerId } = useParams();
  const { developers } = useSelector((state) => state.developers);

  const selectedDeveloper = developers.filter(
    (developer) => developer.id === Number(developerId),
  );
  const games = selectedDeveloper.map((developer) => developer.games)[0];

  return (
    <div>
      <h2 className="text-center bg-white text-slate-900 font-bold">
        {selectedDeveloper[0].name}
        {"'s "}
        games
      </h2>
      <picture className="flex justify-center bg-black">
        <img
          className="w-full md:w-1/2"
          src={selectedDeveloper[0].image_background}
          alt="developer"
          width="200px"
        />
      </picture>
      <ul className="developers-container text-white">
        {games.map((game) => (
          <li
            key={game.id}
            className="hover:bg-sky-800 w-60 h-28 p-3 flex justify-center content-center align-middle"
          >
            <NavLink
              to={`${game.id}`}
              className="self-center"
            >
              <p className="font-bold">{game.name}</p>
              <i className="text-lg">
                Score:
                {game.added || 'N/A'}
              </i>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Developer;
