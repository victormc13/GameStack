import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getGame from '../../redux/gameDetails/fetchGame';

const GameDetails = () => {
  const { gameId } = useParams();
  const { game } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame(gameId));
  }, [dispatch, gameId]);

  return (
    <div className="min-h-fit flex-col">
      <h2 className="text-center bg-white text-slate-900 font-bold">{game.name}</h2>
      <section className="grid bg-slate-900 text-white md:grid-cols-2 md:grid-rows-1">
        <picture className="flex justify-center bg-black">
          <img src={game.background_image} alt={game.name} width="500px" />
        </picture>
        <article className="description w-full p-3 flex-col ">
          <h3 className="text-2xl font-bold text-sky-400">
            Name:
          </h3>
          <p className="text-xl text-center bg-gradient-to-r from-cyan-700 to-blue-900 rounded-lg">{game.name}</p>
          <h3 className="text-2xl font-bold text-sky-400">
            Released:
          </h3>
          <p className="text-xl text-center bg-gradient-to-r from-cyan-700 to-blue-900 rounded-lg">{game.released}</p>
          <h3 className="text-2xl font-bold text-sky-400 place-self-start">
            Rating:
          </h3>
          <p className="text-xl text-center bg-gradient-to-r from-cyan-700 to-blue-900 rounded-lg">{game.rating}</p>
          <ul className="text-lg font-bold display-grid">
            <h3 className="text-2xl font-bold text-sky-400 place-self-start">Platforms:</h3>
            {game.platforms && game.platforms.map((platform) => (
              <li key={platform.platform.id} className="text-sm text-center bg-gradient-to-r from-cyan-700 to-blue-900 p-1 m-1 rounded-lg">{platform.platform.name}</li>
            ))}
          </ul>
          <ul className="text-lg font-bold display-grid">
            <h3 className="text-2xl font-bold text-sky-400 place-self-start text-left">Genres:</h3>
            {game.genres && game.genres.map((genre) => (
              <li key={genre.id} className="text-sm text-center bg-gradient-to-r from-cyan-700 to-blue-900 p-1 m-1 rounded-lg">{genre.name}</li>
            ))}
          </ul>
        </article>
      </section>
      <h3 className="text-2xl font-bold bg-white text-sky-400 place-self-start text-left p-2">Description:</h3>
      <section className="max-h-fit flex justify-center m-3 text-xl md:text-2xl p-3 text-justify bg-slate-900 text-white">{game.description_raw}</section>
    </div>
  );
};

export default GameDetails;
