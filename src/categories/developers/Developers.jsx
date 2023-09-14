import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getDevelopers from '../../redux/byDevelopers/fetchDevelopers';

const Developers = () => {
  const { developers } = useSelector((state) => state.developers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDevelopers());
  }, [dispatch]);

  console.log('Developesr page for now', developers);
  return (
    <div className="developers-section bg-white">
      <h2 className="text-slate-900 font-bold">Developers</h2>
      <ul className="developers-container text-white">
        {developers.map((developer) => (
          <li key={developer.id} className="hover:bg-sky-800 cursor-pointer">
            <p className="text-2xl mb-3">{developer.name}</p>
            <img src={developer.image_background} alt={developer.name} width="200px" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Developers;
