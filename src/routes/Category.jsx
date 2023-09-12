import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import getGenres from '../redux/byGenres/fetchGenres';

const Category = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const pages = [
    {
      to: 'genres', name: 'Genres', img: 'https://img.icons8.com/ios-filled/50/comedy.png', alt: 'genre',
    },
    {
      to: 'platforms', name: 'Platforms', img: 'https://img.icons8.com/fluency-systems-filled/48/virtual-machine.png', alt: 'platform',
    },
    {
      to: 'creators', name: 'Creators', img: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-content-creator-content-creator-tanah-basah-glyph-tanah-basah.png', alt: 'creator',
    },
    {
      to: 'developers', name: 'Developers', img: 'https://img.icons8.com/ios-filled/50/000000/developer.png', alt: 'developer',
    },
  ];

  return (
    <div className="flex-col">
      <h2 className="text-white text-4xl flex justify-center p-3 bg-gradient-to-r from-blue-900 to-cyan-700">
        Category
      </h2>
      <p className="flex justify-center p-1 content-center bg-indigo-900 text-gray-200">
        (
        {pages.length}
        ) Categories
      </p>
      <ul className="category-list min-h-screen flex flex-wrap border-8 border-indigo-900">
        {pages.map((page) => (
          <li
            key={page.to}
            className="h-2/4 w-1/2 md:w-1/2 grid place-items-center text-lg bg-sky-900 hover:text-white text-white hover:bg-sky-950 cursor-pointer"
          >
            <NavLink to={`/${page.to}`} className="content-center text-2xl w-full h-full grid place-content-center">
              <img className="mx-auto" width="25" height="25" src={page.img} alt={page.alt} />
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
