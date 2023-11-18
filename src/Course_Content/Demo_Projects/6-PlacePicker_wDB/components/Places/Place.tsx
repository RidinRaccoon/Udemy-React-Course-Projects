import React from 'react';

export type TPlace = {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;
};

/** `PlacePickerApp` \
 * List item with place information */
export function Place(props: {
  place: TPlace;
  onSelectPlace(id: string): void;
}) {
  const { place, onSelectPlace } = props;
  const { id, title, image } = place;
  const clickHandler = () => onSelectPlace(id);

  return (
    <li className="place-item">
      <button type="button" onClick={clickHandler}>
        <img src={image.src} alt={image.alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
