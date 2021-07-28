import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = ({className, activeClassName}) => {
  return (
    <ul className={className}>
      <li>
        <NavLink activeClassName={activeClassName} to="/basic" >Basic examples</NavLink>
      </li>
      <li>
        <NavLink activeClassName={activeClassName} to={ {pathname: "/state", state: { items: [6, 7, 8] }} } >State examples</NavLink>
      </li>
      <li>
        <NavLink activeClassName={activeClassName} to="/forms" >Form examples</NavLink>
      </li>
      <li>
        <NavLink activeClassName={activeClassName} to="/todo" >Todo list</NavLink>
      </li>
      <li>
        <NavLink activeClassName={activeClassName} to="/test/5" >Test</NavLink>
      </li>
    </ul>
  );
}
