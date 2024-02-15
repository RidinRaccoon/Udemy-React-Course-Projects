import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function addLinkClasses(isActive: boolean) {
  return isActive ? classes.active : undefined;
}

export function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <RRD.NavLink
              to="/events"
              className={({ isActive }) => addLinkClasses(isActive)}
              end
            >
              All Events
            </RRD.NavLink>
          </li>
          <li>
            <RRD.NavLink
              to="/events/new"
              className={({ isActive }) => addLinkClasses(isActive)}
            >
              New Event
            </RRD.NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
