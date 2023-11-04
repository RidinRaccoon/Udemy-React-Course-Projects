import React, { useState } from 'react';
import { TabButton } from './TabButton';
import { EXAMPLES } from '../assets/data/data';
import './ExampleList.css';

export function ExampleList() {
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
  );
}
