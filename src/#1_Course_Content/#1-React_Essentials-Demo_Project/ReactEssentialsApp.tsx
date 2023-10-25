import React, { useState } from 'react';
import { Header } from './components/Header';
import { CoreConcept } from './components/CoreConcept';
import { TabButton } from './components/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './assets/data/data';
import './styles/index.css';

/**
 * First Demo application created in the React course.
 *
 ** Created to get a better grasp of the core concepts of React development (components, jsx, props, state).
 ** This app renders a list that defines the main react concepts and a menu that toggles examples for each concept.
 ** The information listed (Core concepts and examples) can be changed in the data.tsx file
 */
export function ReactEssentialsApp() {
  // The selected topic in the examples section menu
  const [selectedTopic, setselectedTopic] = useState<string>();

  // Set the fallback text to be displayed in the examples section.
  let tabContent = <p>Please select a topic.</p>;

  // Set the tab content to match the selected topic in the menu buttons
  if (selectedTopic && EXAMPLES[selectedTopic]) {
    tabContent = (
      <React.StrictMode>
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].title}</h3>
          <p>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].code}</code>
          </pre>
        </div>
      </React.StrictMode>
    );
  }

  /** Handles the menu Toggle */
  const handleSelect = (selectedButton: string) => {
    setselectedTopic(selectedButton);
  };

  return (
    <React.StrictMode>
      <Header />
      <main>
        {/* Core Concepts section */}
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

        {/* Examples section */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((key) => (
              <TabButton key={key} active={selectedTopic === key} onSelect={() => handleSelect(key)}>
                {EXAMPLES[key].title}
              </TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </React.StrictMode>
  );
}
