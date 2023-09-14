import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import getPlatforms from '../../redux/byPlatforms/fetchPlatforms';

const Platforms = () => {
  const { platforms } = useSelector((state) => state.platforms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  return (
    <div className="platforms-section bg-white">
      <h2 className="text-slate-900 font-bold">Platforms</h2>
      <ul className="platforms-container text-white">
        {platforms.map((platform) => (
          <li key={platform.id} className="hover:bg-sky-800 cursor-pointer">
            <NavLink to={`${platform.id}`}>
              <p className="text-2xl mb-3">{platform.name}</p>
              <img src={platform.image_background} alt={platform.name} width="200px" />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Platforms;
