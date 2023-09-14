import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import getDevelopers from '../../redux/byDevelopers/fetchDevelopers';

const Developers = () => {
  const { developers } = useSelector((state) => state.developers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDevelopers());
  }, [dispatch]);

  return (
    <div className="developers-section bg-white">
      <h2 className="text-slate-900 font-bold">Developers</h2>
      <ul className="developers-container text-white">
        {developers.map((developer) => (
          <li key={developer.id} className="hover:bg-sky-800 cursor-pointer">
            <NavLink to={`${developer.id}`}>
              <p className="text-md font-bold mb-3 pt-3">{developer.name}</p>
              <img src={developer.image_background} alt={developer.name} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Developers;
