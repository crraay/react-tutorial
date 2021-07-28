import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = ({className, activeClassName}) => {
  return (
    <ul className={className}>
      <li>
        <NavLink activeClassName={activeClassName} to="/basic" exact>Basic examples</NavLink>
      </li>
      <li>
        <NavLink activeClassName={activeClassName} to={ {pathname: "/state", state: { items: [6, 7, 8] }} } exact >State examples</NavLink>
      </li>
      <li>
        <NavLink activeClassName={activeClassName} to="/forms" exact >Form examples</NavLink>
      </li>
      <li>
        <NavLink activeClassName={activeClassName} to="/todo" exact >Todo list</NavLink>
      </li>
      <li>
        <NavLink activeClassName={activeClassName} to="/test/5" exact >Test</NavLink>
      </li>
      <li>
        <NavLink activeClassName={activeClassName} to="/context" exact >Context</NavLink>
      </li>
      <li>
        <NavLink activeClassName={activeClassName} to="/modal" exact >Modal</NavLink>
      </li>
    </ul>
  );
}
