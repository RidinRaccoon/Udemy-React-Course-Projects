import React from 'react';
import './Places.css';
//
import { Place, TPlace } from './Place';

/** */
export function Places(props: {
  title: string;
  places: TPlace[];
  fallbackText?: string | null;
  onSelectPlace(id: string): void;
}) {
  const { title, places, fallbackText, onSelectPlace } = props;
  const hasPlaces = places.length > 0;

  return (
    <section className="places-category">
      <h2>{title}</h2>

      {!hasPlaces && <p className="fallback-text">{fallbackText}</p>}

      {hasPlaces && (
        <ul className="places">
          {places.map((place: TPlace) => (
            <Place key={place.id} place={place} onSelectPlace={onSelectPlace} />
          ))}
        </ul>
      )}
    </section>
  );
}
Places.defaultProps = {
  fallbackText: null,
};
