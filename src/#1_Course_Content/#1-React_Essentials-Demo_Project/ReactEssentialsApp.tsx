/* eslint-disable global-require */
import React from 'react';
import logo from './assets/images/react-core-concepts.png';
import './styles/index.css';
import { CORE_CONCEPTS } from './assets/data/data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function generateRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descriptionStart = reactDescriptions[generateRandomInt(3)];
  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{descriptionStart} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}

type CoreConceptProps = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

function CoreConcept({ title, description, src, alt }: CoreConceptProps) {
  return (
    <li>
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export function ReactEssentialsApp() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => (
              <CoreConcept key={data.title} {...data} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
