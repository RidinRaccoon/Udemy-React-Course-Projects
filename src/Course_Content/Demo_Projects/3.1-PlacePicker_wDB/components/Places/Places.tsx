import React from 'react';
import { Place, TPlace } from './Place';
import './Places.css';

/** Renders a list of `Place` components \
 * `PlacePickerDBApp` */
export function Places(props: {
  title: string;
  places: TPlace[];
  fallbackText?: string | null;
  isLoading: boolean;
  loadingText: string;
  onSelectPlace(id: string): void;
}) {
  const { title, places, fallbackText, onSelectPlace } = props;
  const { isLoading, loadingText } = props;
  const hasPlaces = places.length > 0;

  const fallBackMsg = (
    <p className="fallback-text">{isLoading ? loadingText : fallbackText}</p>
  );

  const placeList = places.map((place: TPlace) => (
    <Place key={place.id} place={place} onSelectPlace={onSelectPlace} />
  ));

  return (
    <section className="places-category">
      <h2>{title}</h2>
      {(isLoading || !hasPlaces) && fallBackMsg}
      {!isLoading && hasPlaces && <ul className="places">{placeList}</ul>}
    </section>
  );
}
Places.defaultProps = {
  fallbackText: null,
};
