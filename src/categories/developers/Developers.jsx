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
    <div>Developers page for now</div>
  );
};

export default Developers;
