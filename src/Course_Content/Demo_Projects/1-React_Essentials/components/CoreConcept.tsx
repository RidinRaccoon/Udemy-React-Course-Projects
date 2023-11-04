import React from 'react';

type CoreConceptProps = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

/**
 * Renders a list item with an image, title and description
 */
export function CoreConcept({ title, description, src, alt }: CoreConceptProps) {
  return (
    <li>
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
