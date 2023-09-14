import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import getCreators from '../../redux/byCreators/fetchCreators';

const Creators = () => {
  const { creators } = useSelector((state) => state.creators);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCreators());
  }, [dispatch]);

  return (
    <div className="creators-section bg-white">
      <h2 className="text-slate-900 font-bold">Creators</h2>
      <ul className="creators-container text-white">
        {creators.map((creator) => (
          <li key={creator.id} className="hover:bg-sky-800 cursor-pointer">
            <NavLink to={`${creator.id}`}>
              <p className="text-2xl mb-3">{creator.name}</p>
              <img src={creator.image} alt={creator.name} width="200px" />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Creators;
