import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { Header } from '../Header';

export function EventDetails() {
  return (
    <>
      <RRD.Outlet />
      <Header>
        <RRD.Link to="/events" className="nav-item">
          View all Events
        </RRD.Link>
      </Header>
      <article id="event-details">
        <header>
          <h1>EVENT TITLE</h1>
          <nav>
            <button type="button">Delete</button>
            <RRD.Link to="edit">Edit</RRD.Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src="" alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">EVENT LOCATION</p>
              <time dateTime={`Todo-DateT$Todo-time`}>Date @ TIME</time>
            </div>
            <p id="event-details-description">EVENT DESCRIPTION</p>
          </div>
        </div>
      </article>
    </>
  );
}
