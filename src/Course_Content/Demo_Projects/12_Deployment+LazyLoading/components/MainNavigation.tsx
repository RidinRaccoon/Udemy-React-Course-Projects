import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './MainNavigation.module.css';

function addLinkClasses(isActive: boolean) {
  return isActive ? classes.active : undefined;
}

export function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <RRD.NavLink
              to="/"
              className={({ isActive }) => addLinkClasses(isActive)}
              end
            >
              Home
            </RRD.NavLink>
          </li>
          <li>
            <RRD.NavLink
              to="/posts"
              className={({ isActive }) => addLinkClasses(isActive)}
            >
              Blog
            </RRD.NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
