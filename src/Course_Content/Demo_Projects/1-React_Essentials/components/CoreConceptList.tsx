import React from 'react';
import { CoreConcept } from './CoreConcept';
import { CORE_CONCEPTS } from '../assets/data/data';
import './CoreConceptList.css';

export function CoreConceptList() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((data) => (
          <CoreConcept
            key={data.title}
            title={data.title}
            description={data.description}
            src={data.src}
            alt={data.alt}
          />
        ))}
      </ul>
    </section>
  );
}
