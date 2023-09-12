import { NavLink } from 'react-router-dom';

const Header = () => (
  <h1 className="text-5xl h-32 p-3 text-center font-bold grid place-items-center bg-gradient-to-r from-cyan-700 to-blue-900 text-white">
    <NavLink to="/" className="flex justify-center items-center">GameStack</NavLink>
  </h1>
);

export default Header;
