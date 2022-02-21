import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';

const Navigation = () => {
  const links = [
    { id: 1, path: '/', text: 'Books' },
    { id: 2, path: '/categories', text: 'Categories' },
  ];
  return (
    <>
      <header className="links">
        <h1>Bookstore CMS</h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} exact="true">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="user">
          <MdPerson />
        </div>
      </header>
    </>
  );
};

export default Navigation;
