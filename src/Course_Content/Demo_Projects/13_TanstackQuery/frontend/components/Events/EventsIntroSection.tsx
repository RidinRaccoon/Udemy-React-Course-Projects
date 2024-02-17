import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import meetupImg from '../../assets/meetup.jpg';

export function EventsIntroSection() {
  return (
    <section
      className="content-section"
      id="overview-section"
      style={{ backgroundImage: `url(${meetupImg})` }}
    >
      <h2>
        Connect with amazing people <br />
        or <strong>find a new passion</strong>
      </h2>
      <p>Anyone can organize and join events on React Event!</p>
      <p>
        <RRD.Link to="/events/new" className="button">
          Create your first event
        </RRD.Link>
      </p>
    </section>
  );
}
