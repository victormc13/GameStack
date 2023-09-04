import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = () => {
  const pages = [
    { to: 'recently-released', name: 'Recently Released' },
    { to: 'popular', name: 'Popular' },
    { to: 'hall-of-fame', name: 'Hall Of Fame' },
    { to: 'upcoming', name: 'Upcoming' },
  ];

  return (
    <div>
      <h2>Category</h2>
      <ul>
        {pages.map((page) => (
          <li key={page.to}><NavLink to={`/${page.to}`}>{page.name}</NavLink></li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
