/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import * as React from 'react';
// Components & Types
import { TImage } from '../types/types';

export function ImagePicker(props: //
{
  images: TImage[];
  selectedImage: any; // TODO: Fix Typing
  onSelect: (path: string) => {};
}) {
  const { images, selectedImage, onSelect } = props;
  return (
    <div id="image-picker">
      <p>Select an image</p>
      <ul>
        {images.map((image) => (
          <li
            key={image.path}
            onClick={() => onSelect(image.path)}
            onKeyDown={() => onSelect(image.path)}
            className={selectedImage === image.path ? 'selected' : undefined}
          >
            <img
              src={`http://localhost:3001/${image.path}`}
              alt={image.caption}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
