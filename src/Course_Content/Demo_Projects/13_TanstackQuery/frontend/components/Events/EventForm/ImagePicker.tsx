import * as React from 'react';
// Components & Types
import { TEventImage } from '../../../types/types';

export function ImagePicker(props: {
  images: TEventImage[];
  selectedImage: string;
  onSelect: (imagePath: string) => void;
}) {
  const { images, selectedImage, onSelect } = props;
  return (
    <div id="image-picker">
      <p>Select an image</p>
      <ul>
        {images.map((image) => (
          <li
            key={image.path}
            className={selectedImage === image.path ? 'selected' : undefined}
          >
            <button type="button" onClick={() => onSelect(image.path)}>
              <img
                src={`http://localhost:3001/${image.path}`}
                alt={image.caption}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
