import * as React from 'react';
import * as RDM from 'react-router-dom';
import classes from './MainNavigation.module.css';

function addLinkClasses(isActive: boolean) {
  return isActive ? classes.active : undefined;
}

export function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <RDM.NavLink
              to="/"
              className={({ isActive }) => addLinkClasses(isActive)}
              end
            >
              Home
            </RDM.NavLink>
          </li>
          <li>
            <RDM.NavLink
              to="/products"
              className={({ isActive }) => addLinkClasses(isActive)}
            >
              Products
            </RDM.NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
