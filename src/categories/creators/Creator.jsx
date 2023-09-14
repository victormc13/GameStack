import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

const Creator = () => {
  const { creatorId } = useParams();
  const { creators } = useSelector((state) => state.creators);

  const selectedCreator = creators.filter(
    (creator) => creator.id === Number(creatorId),
  );
  const games = selectedCreator.map((creator) => creator.games)[0];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h2 className="text-center bg-white text-slate-900 font-bold">
        {selectedCreator[0].name}
        {"'s "}
        games
      </h2>
      <picture className="flex justify-center bg-black">
        <img
          className="w-full md:w-1/2"
          src={selectedCreator[0].image}
          alt="creator"
          width="200px"
        />
      </picture>
      <ul className="creators-container text-white">
        {games.map((game) => (
          <li
            key={game.id}
            className="hover:bg-sky-800 w-60 h-28 p-3 flex justify-center content-center align-middle"
          >
            <NavLink
              to={`${game.id}`}
              className="self-center"
              onClick={scrollToTop}
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
      <ul className="flex justify-center">
        <span className="bg-white text-black font-bold rounded-lg p-1 m-1">Positions: </span>
        {selectedCreator[0].positions
            && selectedCreator[0].positions.map((position) => (
              <li
                key={position.id}
                className="text-sm text-center bg-gradient-to-r from-cyan-700 to-blue-900 p-2 m-1 rounded-lg text-white font-bold"
              >
                {position.name}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Creator;
