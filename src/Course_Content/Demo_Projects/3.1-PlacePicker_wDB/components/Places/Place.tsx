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

const backendURL = 'http://localhost:3001/'

/** List item with place information \
 * `PlacePickerDBApp` */
export function Place(props: {
  place: TPlace;
  onSelectPlace(id: string): void;
}) {
  const { place, onSelectPlace } = props;
  const { id, title, image } = place;
  const clickHandler = () => onSelectPlace(id);
  const imgURL = backendURL + image.src;
  return (
    <li className="place-item">
      <button type="button" onClick={clickHandler}>
        <img src={imgURL} alt={image.alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
