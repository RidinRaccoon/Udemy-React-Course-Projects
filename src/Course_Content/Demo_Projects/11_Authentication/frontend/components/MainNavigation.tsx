import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './MainNavigation.module.css';
// Components
import { NewsletterSignup } from './NewsletterSignup';

function addLinkClasses(isActive: boolean) {
  return isActive ? classes.active : undefined;
}

export function MainNavigation() {
  const authToken = RRD.useRouteLoaderData('root') as string;

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
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
              to="/events"
              className={({ isActive }) => addLinkClasses(isActive)}
            >
              Events
            </RRD.NavLink>
          </li>
          <li>
            <RRD.NavLink
              to="/newsletter"
              className={({ isActive }) => addLinkClasses(isActive)}
            >
              Newsletter
            </RRD.NavLink>
          </li>
          {!authToken && (
            <li>
              <RRD.NavLink
                to="/auth?mode=login"
                className={({ isActive }) => addLinkClasses(isActive)}
              >
                Authentication
              </RRD.NavLink>
            </li>
          )}
          {authToken && (
            <li>
              <RRD.Form action="/logout" method="POST">
                <button type="submit">Logout</button>
              </RRD.Form>
            </li>
          )}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}
