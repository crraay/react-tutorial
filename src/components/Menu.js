import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/basic" >Basic examples</Link>
      </li>
      <li>
        <Link to={ {pathname: "/state", state: { items: [6, 7, 8] }} } >State examples</Link>
      </li>
      <li>
        <Link to="/forms" >Form examples</Link>
      </li>
      <li>
        <Link to="/todo" >Todo list</Link>
      </li>
      <li>
        <Link to="/test/5" >Test</Link>
      </li>
    </ul>
  );
}
